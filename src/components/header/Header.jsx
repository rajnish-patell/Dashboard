import React, { useState } from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { FiSearch } from "react-icons/fi";
import avatar from "../../assets/images/avatar.jpg";
import { useTheme as useCustomTheme } from "../../contexts/ThemeContext";
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import logo from "../../assets/images/logo.png";
import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuUnfold2Line } from "react-icons/ri";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import "./Header.scss";
import { BsFilterLeft } from "react-icons/bs";
import { MdLeaderboard } from "react-icons/md";
import { ImCart } from "react-icons/im";
import { BiSolidShoppingBag } from "react-icons/bi";
import { PiInvoiceFill } from "react-icons/pi";
import { VscGraphLine } from "react-icons/vsc";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#202028",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#202028",
    },
  }),
  [theme.breakpoints.down("481")]: {
    ...(open
      ? {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": {
            ...openedMixin(theme),
            width: drawerWidth, // Ensure width is drawerWidth when open
          },
        }
      : {
          width: 0,
          "& .MuiDrawer-paper": {
            width: 0,
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
        }),
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

export default function MiniDrawer() {
  const [openSearch, setOpenSeach] = React.useState(false);
  const handleOpen = () => setOpenSeach(true);
  const handleClose = () => setOpenSeach(false);

  const [activeItem, setActiveItem] = useState("home");
  const isActive = (item) => item === activeItem;
  const theme = useTheme();
  const { theme: customTheme, themeMode, toggleTheme } = useCustomTheme();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar
        className="headerTop"
        position="fixed"
        open={open}
        sx={{
          width: "calc(100% - 65px)",
          background:
            customTheme.palette.mode === "light" ? "#ffffff" : "#202028",
          boxShadow: "unset",
          borderBottom: `1px solid ${
            customTheme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.12)"
              : "rgba(255, 255, 255, 0.12)"
          }`,
          "@media(max-width: 600px)": {
            width: "calc(100% - 56px)",
          },
        }}
      >
        <Container className="headerWrapper" maxWidth={false}>
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              className="drawerIcon"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                background:
                  customTheme.palette.mode === "light" ? "#f2f6ff" : "#43444d",
                m: "0",
                ...(open && { display: "none" }),
              }}
            >
              <BsFilterLeft />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Search
                sx={{
                  background:
                    customTheme.palette.mode === "light"
                      ? "#f2f6ff"
                      : "#43444d",
                  "&:hover": {
                    background:
                      customTheme.palette.mode === "light"
                        ? "#f2f6ff"
                        : "#43444d",
                  },
                }}
              >
                <SearchIconWrapper>
                  <FiSearch />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none", flexGrow: 1 } }}>
              <Tooltip arrow title="Search">
                <IconButton
                  sx={{
                    p: "8px",
                    background: customTheme.palette.primary.light,
                    ml: "10px",
                    color: customTheme.palette.primary.contrastText,
                  }}
                >
                  <FiSearch style={{ fontSize: "18px" }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip arrow title="Toggle theme">
                <IconButton
                  onClick={toggleTheme}
                  size="large"
                  aria-label="toggle theme"
                  color="inherit"
                  sx={{
                    p: "8px",
                    color: customTheme.palette.primary.contrastText,
                    background:
                      customTheme.palette.mode === "light"
                        ? "#f2f6ff"
                        : "#43444d",
                  }}
                >
                  {themeMode === "light" ? (
                    <Brightness4Icon style={{ fontSize: "18px" }} />
                  ) : (
                    <Brightness7Icon style={{ fontSize: "18px" }} />
                  )}
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Open Mail">
                <IconButton
                  sx={{
                    p: "8px",
                    background:
                      customTheme.palette.mode === "light"
                        ? "#f2f6ff"
                        : "#43444d",
                    ml: "10px",
                    color: customTheme.palette.primary.contrastText,
                  }}
                >
                  <NotificationsIcon style={{ fontSize: "18px" }} />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Open settings">
                <IconButton
                  sx={{
                    p: "8px",
                    background:
                      customTheme.palette.mode === "light"
                        ? "#f2f6ff"
                        : "#43444d",
                    ml: "10px",
                    color: customTheme.palette.primary.contrastText,
                  }}
                >
                  <SettingsIcon style={{ fontSize: "18px" }} />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Open Profile">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, ml: "10px" }}
                >
                  <Avatar
                    alt="avatar"
                    src={avatar}
                    sx={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "30px",
                    }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                anchorEl={anchorElUser}
                id="account-menu"
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                onClick={handleCloseUserMenu}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  key="profile" // Unique key
                  onClick={handleCloseUserMenu}
                  sx={{ px: "20px",
                    minHeight: 'unset', mx: "10px", borderRadius: "4px" }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>

                <MenuItem
                  key="account" // Unique key
                  onClick={handleCloseUserMenu}
                  sx={{ px: "20px",
                    minHeight: 'unset', mx: "10px", borderRadius: "4px" }}
                >
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>

                <MenuItem
                  key="logout" // Unique key
                  onClick={handleCloseUserMenu}
                  sx={{
                    "&:hover": { background: theme.palette.error.lighter },
                    px: "20px",
                    minHeight: 'unset',
                    mx: "10px",
                    borderRadius: "4px",
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{ color: theme.palette.error.main }}
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </CustomAppBar>
      <Drawer
        className="headerDrawer"
        variant="permanent"
        sx={{ zIndex: "1202" }}
        open={open}
      >
        <Box
          sx={{
            minHeight: "64px",
            display: "flex",
            p: "8px 20px",
            justifyContent: open ? "flex-start" : "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box className="brandLogo" sx={{ cursor: "pointer" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "24px", height: "24px" }}
            />
          </Box>
          <DrawerHeader
            sx={{
              display: open ? "block" : "none",
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              transition: "0.5s all",
              maxHeight: "40px",
              minHeight: "40px !important",
            }}
          >
            <IconButton
              className="drawerIcon"
              onClick={handleDrawerClose}
              sx={{
                background:
                  customTheme.palette.mode === "light" ? "#f2f6ff" : "#43444d",
                color:
                  customTheme.palette.mode === "light" ? "#000000" : "#ffffff",
              }}
            >
              {theme.direction === "rtl" ? (
                <NavigateNextIcon />
              ) : (
                <NavigateBeforeIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </Box>
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setActiveItem("home")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                  color: isActive("home")
                    ? "#5375fd"
                    : customTheme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.50)"
                    : "rgba(255, 255, 255, 0.50)",
                }}
              >
                <GoHomeFill size={24} />
              </ListItemIcon>
              <ListItemText
                primary="Home"
                sx={{
                  opacity: open ? 1 : 0,
                  fontSize: "14px",
                  fontWeight: "600",
                  "& .MuiTypography-root": {
                    color: isActive("home")
                      ? "#5375fd"
                      : customTheme.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.50)"
                      : "rgba(255, 255, 255, 0.50)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setActiveItem("Sales")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                  color: isActive("Sales")
                    ? "#5375fd"
                    : customTheme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.50)"
                    : "rgba(255, 255, 255, 0.50)",
                }}
              >
                <VscGraphLine size={24} />
              </ListItemIcon>
              <ListItemText
                primary="Sales"
                sx={{
                  fontWeight: "600",
                  opacity: open ? 1 : 0,
                  fontSize: "14px",
                  "& .MuiTypography-root": {
                    color: isActive("Sales")
                      ? "#5375fd"
                      : customTheme.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.50)"
                      : "rgba(255, 255, 255, 0.50)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setActiveItem("Orders")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                  color: isActive("Orders")
                    ? "#5375fd"
                    : customTheme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.50)"
                    : "rgba(255, 255, 255, 0.50)",
                }}
              >
                <ImCart size={24} />
              </ListItemIcon>
              <ListItemText
                primary="Orders"
                sx={{
                  fontWeight: "600",
                  opacity: open ? 1 : 0,
                  fontSize: "14px",
                  "& .MuiTypography-root": {
                    color: isActive("Orders")
                      ? "#5375fd"
                      : customTheme.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.50)"
                      : "rgba(255, 255, 255, 0.50)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setActiveItem("Products")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                  color: isActive("Products")
                    ? "#5375fd"
                    : customTheme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.50)"
                    : "rgba(255, 255, 255, 0.50)",
                }}
              >
                <BiSolidShoppingBag size={24} />
              </ListItemIcon>
              <ListItemText
                primary="Products"
                sx={{
                  fontWeight: "600",
                  opacity: open ? 1 : 0,
                  fontSize: "14px",
                  "& .MuiTypography-root": {
                    color: isActive("Products")
                      ? "#5375fd"
                      : customTheme.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.50)"
                      : "rgba(255, 255, 255, 0.50)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => setActiveItem("Invoice")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1 : "auto",
                  justifyContent: "center",
                  color: isActive("Invoice")
                    ? "#5375fd"
                    : customTheme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.50)"
                    : "rgba(255, 255, 255, 0.50)",
                }}
              >
                <PiInvoiceFill size={24} />
              </ListItemIcon>
              <ListItemText
                primary="Invoice"
                sx={{
                  fontWeight: "600",
                  opacity: open ? 1 : 0,
                  fontSize: "14px",
                  "& .MuiTypography-root": {
                    color: isActive("Invoice")
                      ? "#5375fd"
                      : customTheme.palette.mode === "light"
                      ? "rgba(0, 0, 0, 0.50)"
                      : "rgba(255, 255, 255, 0.50)",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

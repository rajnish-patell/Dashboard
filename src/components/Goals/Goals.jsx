import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, IconButton } from "@mui/material";
import { BiTargetLock } from "react-icons/bi";
import { FaHamburger } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Item } from "../common/StyledComponents"; 
import './Goals.scss'



const Goal = () => {
  const theme = useTheme();

  return (
    <Item sx={{ minHeight: "260px" }}>
      <Box  display="flex" alignItems="center" justifyContent="space-between" mb="30px" sx={{'@media (max-width: 899px)': {mb: '15px'} }}>
        <Box display="flex" alignItems="center" gap="10px">
          <Box>
            <IconButton
              className="drawerIcon"
              sx={{
                background:
                  theme.palette.error.lighter,
                color:  theme.palette.error.main,
                padding: '16px'
              }}
            >
              <BiTargetLock  />
            </IconButton>
          </Box>
          <Box ml={1}>
            <Typography variant="h6" sx={{'@media (max-width: 899px)': {fontSize: '16px'} }}>Goals</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <IconButton
            className="drawerIcon"
            sx={{
              background:
                theme.palette.mode === "light" ? "#ffffff" : "#43444d",
              color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Box>

      <Box  display="flex" alignItems="center" justifyContent="space-between" mb="30px" sx={{'@media (max-width: 899px)': {mb: '15px'} }}>
        <Box display="flex" alignItems="center" gap="10px">
          <Box>
            <IconButton
              className="drawerIcon"
              sx={{
                background:
                  theme.palette.success.lighter,
                color:  theme.palette.success.main,
                padding: '16px'
              }}
            >
              <FaHamburger  />
            </IconButton>
          </Box>
          <Box ml={1}>
            <Typography variant="h6" sx={{'@media (max-width: 899px)': {fontSize: '16px'} }}>Popular Dish</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <IconButton
            className="drawerIcon"
            sx={{
              background:
                theme.palette.mode === "light" ? "#ffffff" : "#43444d",
              color: theme.palette.mode === "light" ? "#000000" : "#ffffff",
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Box>

      <Box  display="flex" alignItems="center" justifyContent="space-between" >
        <Box display="flex" alignItems="center" gap="10px">
          <Box>
            <IconButton
              className="drawerIcon"
              sx={{
                background:
                  theme.palette.pink.lighter,
                color:  theme.palette.pink.main,
                padding: '16px'
              }}
            >
              <BiSolidDish  />
            </IconButton>
          </Box>
          <Box ml={1}>
            <Typography variant="h6" sx={{'@media (max-width: 899px)': {fontSize: '14px'} }}>Menus</Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <IconButton
            className="drawerIcon"
            sx={{
              background:
                theme.palette.mode === "light" ? "#ffffff" : "#43444d",
              color: theme.palette.mode === "light" ? "rgb(0 0 0 / 70%)" : "rgb(255 255 255 / 75%)",
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </Box>

      
    </Item>
  );
};

export default Goal;

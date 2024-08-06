import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { FaBasketShopping } from "react-icons/fa6";
import { TiArrowSortedUp } from "react-icons/ti";
import { GiShoppingBag } from "react-icons/gi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Item } from "../common/StyledComponents";

const DashboardData = () => {
  const theme = useTheme();

  return (
    <Box
      className="dashboradData"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "100%",
      }}
    >
      <Item className="dashboardItem" sx={{minHeight: "170px",'@media(max-width: 899px)': {minHeight: '140px'}}}>
        <Box>
          <Box
            className="dataIcon"
            sx={{
              background: theme.palette.secondary.light,
              color: theme.palette.secondary.main,
            }}
          >
            <FaBasketShopping size={24} />
          </Box>
          <Box className="dataTitle">
            <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
              Total Orders
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">75</Typography>
          <Typography
            sx={{
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              color: theme.palette.success.main,
            }}
          >
            <TiArrowSortedUp size={24} />
            3%
          </Typography>
        </Box>
      </Item>

      <Item className="dashboardItem" sx={{minHeight: "170px",'@media(max-width: 899px)': {minHeight: '140px'}}}>
        <Box>
          <Box
            className="dataIcon"
            sx={{
              background: theme.palette.success.lighter,
              color: theme.palette.success.main,
            }}
          >
            <GiShoppingBag size={24} />
          </Box>
          <Box className="dataTitle">
            <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
              Total Delivered
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">75</Typography>
          <Typography
            sx={{
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              color: theme.palette.error.main,
            }}
          >
            <TiArrowSortedUp size={24} />
            3%
          </Typography>
        </Box>
      </Item>

      <Item className="dashboardItem" sx={{minHeight: "170px",'@media(max-width: 899px)': {minHeight: '140px'}}}>
        <Box>
          <Box
            className="dataIcon"
            sx={{
              background: theme.palette.error.lighter,
              color: theme.palette.error.main,
            }}
          >
            <GiShoppingBag size={24} />
          </Box>
          <Box className="dataTitle">
            <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
              Total Cancelled
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">75</Typography>
          <Typography
            sx={{
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              color: theme.palette.success.main,
            }}
          >
            <TiArrowSortedUp size={24} />
            3%
          </Typography>
        </Box>
      </Item>

      <Item className="dashboardItem" sx={{minHeight: "170px",'@media(max-width: 899px)': {minHeight: '140px'}}}>
        <Box>
          <Box
            className="dataIcon"
            sx={{
              background: theme.palette.pink.lighter,
              color: theme.palette.pink.main,
            }}
          >
            <RiMoneyDollarCircleFill size={24} />
          </Box>
          <Box className="dataTitle">
            <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
              Total Revenue
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">75</Typography>
          <Typography
            sx={{
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              color: theme.palette.error.main,
            }}
          >
            <TiArrowSortedUp size={24} />
            3%
          </Typography>
        </Box>
      </Item>
    </Box>
  );
};

export default DashboardData;

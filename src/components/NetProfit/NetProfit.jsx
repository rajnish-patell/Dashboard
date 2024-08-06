import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { Item } from "../common/StyledComponents";
import { useTheme } from "@mui/material/styles";
import { TiArrowSortedUp } from "react-icons/ti";
import ReactApexChart from "react-apexcharts";
import GoalChart from "../GoalChart/GoalChart";

const NetProfit = () => {
  const theme = useTheme();

  return (
    <Item className="dashboardItem">
      <Box
       className="dashboardItemOuter"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Box className="dataTitle">
            <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
              Net Profit
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4">$6759.25</Typography>
          </Box>
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
        <Box className="goalChart">
          <GoalChart />
        </Box>
      </Box>
    </Item>
  );
};

export default NetProfit;

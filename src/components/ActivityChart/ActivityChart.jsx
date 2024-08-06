import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Typography, Box } from "@mui/material";
import { Item } from "../common/StyledComponents";
import { useTheme } from "@mui/material/styles";

const ActivityChart = () => {
  const theme = useTheme();
  const [timeframe, setTimeframe] = useState("weekly");

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  // Data for weekly and monthly
  const data = {
    weekly: [
      6000, 3000, 4000, 3500, 2000, 5000, 8000, 6000, 9000, 10000, 11000, 13000,
      12000, 11500, 9000, 11000, 12000, 10500, 13500, 12500, 11000, 8500, 10000,
    ],
    monthly: [
      210000, 230000, 250000, 220000, 240000, 260000, 270000, 280000, 290000,
      300000, 310000, 320000,
    ],
  };

  const categories = {
    weekly: [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
    ],
    monthly: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  };

  const options = {
    chart: {
      type: "bar",
      height: 275,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
      },
    },
    colors: ["#3b5eff"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: categories[timeframe],
      labels: {
        style: {
          colors: theme.palette.mode === "light" ? "#36383f" : "#ffffff",
        },
      },
      title: {
        style: {
          color: "#43444d", 
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          if (value >= 1000) {
            return `${Math.round(value / 1000)}k`;
          }
          return value;
        },
        style: {
          colors: theme.palette.mode === "light" ? "#36383f" : "#ffffff",
        },
      },
      title: {
        style: {
          color: "#43444d", // Set y-axis title color to red
        },
      },
      min: 0,
      max: Math.max(...data[timeframe]) * 1.1,
      tickAmount: 3,
    },
  };

  const series = [
    {
      name: "Activity",
      data: data[timeframe],
    },
  ];

  return (
    <Box>
      <Item sx={{minHeight: '260px'}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "16px",
          }}
        >
          <Typography variant="h5">Activity</Typography>
          <select
            id="timeframe"
            value={timeframe}
            onChange={handleTimeframeChange}
            style={{
              padding: "5px",
              borderRadius: "30px",
              fontWeight: "600",
              "&:focus": { outline: "unset", border: "unset" },
              background:
                theme.palette.mode === "light" ? "#f2f6ff" : "#43444d",
              color: theme.palette.mode === "light" ? "#3b5eff" : "#ffffff",
              borderColor:
                theme.palette.mode === "light" ? "#3b5eff" : "#ffffff80",
              cursor: "pointer",
            }}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </Box>
       
          <Chart options={options} series={series} type="bar" height={168} />
      
      </Item>
    </Box>
  );
};

export default ActivityChart;

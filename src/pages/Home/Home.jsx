import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Header from "../../components/header/Header";
import DashboardData from "../../components/DashboardData/DashboardData";
import "./Home.scss";
import ActivityChart from "../../components/ActivityChart/ActivityChart";
import RecentOrder from "../../components/RecentOrder/RecentOrder";
import NetProfit from "../../components/NetProfit/NetProfit";
import Goal from "../../components/Goals/Goals";
import Feedback from "../../components/Feedback/Feedback";

const Home = () => {
  return (
    <Box component="main">
      <Box>
        <Header />
      </Box>
      <Box className="dashboardLayout" sx={{ p: "20px 0" }}>
        <Container maxWidth={false}>
          <Box className="pageTitle" sx={{ mb: "20px" }}>
            <Typography variant="h3">Dashboard</Typography>
          </Box>

          <Box
            className="dashboardGrid"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",

              gap: "20px",
              width: "100%",
            }}
          >
            <Box
              className="dashboardCol"
              sx={{
                flexBasis: { xs: "50%", md: "66.67%" },
                flexGrow: 1,
              }}
            >
              <Box sx={{ mb: "20px" }}>
                <DashboardData />
              </Box>
              <Box sx={{ mb: "20px" }}>
                <ActivityChart />
              </Box>

              <Box sx={{ mb: "20px" }}>
                <RecentOrder />
              </Box>
            </Box>
            <Box
              className="dashboardCol"
              sx={{
                flexBasis: { xs: "50%", md: "33.33%" },
                flexGrow: 1,
              }}
            >
              <Box sx={{ mb: "20px" }}>
                <NetProfit />
              </Box>

              <Box className="goalSec" sx={{ mb: "20px" }}>
                <Goal />
              </Box>

              <Box className="feedback" sx={{ mb: "20px" }}>
                <Feedback />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;

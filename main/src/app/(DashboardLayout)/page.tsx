"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import WelcomeCard from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheWelcomeCard";
import BlogCard from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheBlogCard";
import Earnings from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheEarnings";
import MonthlySales from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheMonthlySales";
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheSalesOverview";
import TotalSales from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheTotalSales";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheProductPerformance";
import WeeklyStats from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheWeeklyStats";
import DailyActivities from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheDailyActivities";
import Welcome from "@/app/(DashboardLayout)/layout/shared/welcome/Welcome";

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <WelcomeCard />
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <Earnings />
              </Grid>
              <Grid item xs={12} lg={6} sm={6}>
                <MonthlySales />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 2 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <TotalSales />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          {/* ------------------------- row 3 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} lg={4}>
            <WeeklyStats />
          </Grid>
          <Grid item xs={12} lg={4}>
            <DailyActivities />
          </Grid>
        </Grid>
        <Welcome />
      </Box>
    </PageContainer>
  );
}

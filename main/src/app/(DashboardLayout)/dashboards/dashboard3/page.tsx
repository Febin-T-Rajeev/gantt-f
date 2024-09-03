"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// components
import Congratulation from "@/app/(DashboardLayout)/components/dashboard/dashboard3/Congratulation";
import Purchases from "@/app/(DashboardLayout)/components/dashboard/dashboard3/Purchases";
import TotalEarnings from "@/app/(DashboardLayout)/components/dashboard/dashboard3/TotalEarnings";
import RevenueUpdates from "@/app/(DashboardLayout)/components/dashboard/dashboard3/RevenueUpdates";
import MonthlyEarnings from "@/app/(DashboardLayout)/components/dashboard/dashboard3/MonthlyEarnings";
import Customers from "@/app/(DashboardLayout)/components/dashboard/dashboard3/Customers";
import TotalSales from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheTotalSales";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/dashboard3/ProductPerformance";
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheSalesOverview";

import BlogCard from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheBlogCard";
import WeeklyStats from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheWeeklyStats";
import DailyActivities from "@/app/(DashboardLayout)/components/dashboard/dashboard3/DailyActivities";
import MedicalProBranding from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheMedicalProBranding";

export default function Modern() {
  return (
    <PageContainer title="Modern Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <Congratulation />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Purchases />
          </Grid>
          <Grid item xs={12} lg={4}>
            <TotalEarnings />
          </Grid>
          <Grid item xs={12} lg={8}>
            <RevenueUpdates />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
              <Grid item xs={12}>
                <Customers />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <TotalSales />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>

          <Grid item xs={12} lg={6}>
            <DailyActivities />
          </Grid>

          <Grid item xs={12} lg={6}>
            <SalesOverview />
          </Grid>

          {/* ------------------------- row 3 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <BlogCard />
          </Grid>
          <Grid item xs={12} lg={4}>
            <WeeklyStats />
          </Grid>
          <Grid item xs={12} lg={4}>
            <MedicalProBranding />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";

// components
import EarningsShop from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheEarningsShop";
import TopCards from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheTopCards";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheProductPerformance";
import Earnings from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheEarnings";
import YearlySales from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheYearlySales";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheRecentTransactions";
import ProductsTable from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheProductsTable";
import WeeklyStats from "@/app/(DashboardLayout)/components/dashboard/dashboard1/TheWeeklyStats";
import MedicalproBranding from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheMedicalProBranding";
import BlogCard from "@/app/(DashboardLayout)/components/dashboard/dashboard2/TheBlogCard";

export default function eCommerce() {
  return (
    <PageContainer title="eCommerce Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <EarningsShop />
          </Grid>
          <Grid item xs={12} lg={8}>
            <TopCards />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Earnings />
              </Grid>
              <Grid item xs={12}>
                <YearlySales />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductsTable />
          </Grid>
          <Grid item xs={12} lg={4}>
            <WeeklyStats />
          </Grid>
          <Grid item xs={12} lg={4}>
            <MedicalproBranding />
          </Grid>
          <Grid item xs={12} lg={4}>
            <BlogCard />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

"use client";

import { Grid } from "@mui/material";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import YearlyBreakup from "@/app/(DashboardLayout)/components/widgets/charts/YearlyBreakup";
import Projects from "@/app/(DashboardLayout)/components/widgets/charts/Projects";
import Customers from "@/app/(DashboardLayout)/components/widgets/charts/Customers";
import SalesTwo from "@/app/(DashboardLayout)/components/widgets/charts/SalesTwo";
import MonthlyEarnings from "@/app/(DashboardLayout)/components/widgets/charts/MonthlyEarnings";
import SalesOverview from "@/app/(DashboardLayout)/components/widgets/charts/SalesOverview";
import RevenueUpdates from "@/app/(DashboardLayout)/components/widgets/charts/RevenueUpdates";
import YearlySales from "@/app/(DashboardLayout)/components/widgets/charts/YearlySales";
import MostVisited from "@/app/(DashboardLayout)/components/widgets/charts/MostVisited";
import PageImpressions from "@/app/(DashboardLayout)/components/widgets/charts/PageImpressions";
import Followers from "@/app/(DashboardLayout)/components/widgets/charts/Followers";
import Views from "@/app/(DashboardLayout)/components/widgets/charts/Views";
import Earned from "@/app/(DashboardLayout)/components/widgets/charts/Earned";
import CurrentValue from "@/app/(DashboardLayout)/components/widgets/charts/CurrentValue";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Charts",
  },
];

const WidgetCharts = () => {
  return (
    <PageContainer title="Charts" description="this is Charts">
      {/* breadcrumb */}
      <Breadcrumb title="Charts" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Followers />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Views />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Earned />
        </Grid>
        <Grid item xs={12} sm={3}>
          <SalesTwo />
        </Grid>
        <Grid item xs={12}>
          <CurrentValue />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YearlyBreakup />
            </Grid>
            <Grid item xs={12}>
              <MonthlyEarnings />
            </Grid>
            <Grid item xs={12}>
              <MostVisited />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <YearlySales />
            </Grid>
            <Grid item xs={12}>
              <PageImpressions />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Customers />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Projects />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <RevenueUpdates />
            </Grid>
            <Grid item xs={12}>
              <SalesOverview />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default WidgetCharts;

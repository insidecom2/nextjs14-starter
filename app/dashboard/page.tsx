"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PageContainer from "../../src/components/container/PageContainer";
// components
import SalesOverview from "../../src/components/dashboard/SalesOverview";
import YearlyBreakup from "../../src/components/dashboard/YearlyBreakup";
import RecentTransactions from "../../src/components/dashboard/RecentTransactions";
import ProductPerformance from "../../src/components/dashboard/ProductPerformance";
import MonthlyEarnings from "../../src/components/dashboard/MonthlyEarnings";

export default function Dashboard() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

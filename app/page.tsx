"use client";

import PageContainer from "../src/components/container/PageContainer";
import AuthLogin from "../src/components/auth/authForms/AuthLogin";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box mt={3}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "80vh" }}
        >
          <Grid item xs={12} lg={12}>
            <AuthLogin />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

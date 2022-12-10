import { Box } from "@mui/material";
import React from "react";
import DonationList from "../../components/DonationList";
import PageTitle from "../../components/PageTitle";
import DonationsMock from "../../_mocks_/donations";

const Donations: React.FC = () => {
  return (
    <Box width="100%">
      <PageTitle>Doações</PageTitle>

      <DonationList max={50} donations={DonationsMock} />
    </Box>
  );
};

export default Donations;

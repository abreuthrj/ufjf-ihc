import { Box } from "@mui/material";
import React from "react";
import DonationList from "../../components/DonationList";
import PageTitle from "../../components/PageTitle";
import { useStore } from "../../contexts/Store";

const Donations: React.FC = () => {
  const { donations } = useStore();

  return (
    <Box width="100%">
      <PageTitle>Doações</PageTitle>

      <DonationList max={50} donations={donations} />
    </Box>
  );
};

export default Donations;

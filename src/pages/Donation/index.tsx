import { Box, Breadcrumbs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IDonation } from "../../@types/donation";
import { CustomStatus } from "../../components/DonationList/styles";
import ItemsList from "../../components/ItemsList";
import PageTitle from "../../components/PageTitle";
import DonationsMock from "../../_mocks_/donations";

type NavParams = {
  id: string;
};

const Donation: React.FC = () => {
  const { id } = useParams<NavParams>();

  const [donation, setDonation] = useState<IDonation>();

  useEffect(() => {
    setDonation(DonationsMock.find((d) => d.id === id));
  }, [id]);

  return (
    <Box width="100%">
      <Breadcrumbs
        sx={{ backgroundColor: "#fafafa", p: 1, borderRadius: 2 }}
        separator=">"
      >
        <Link to="/">Início</Link>
        <Typography color="text.primary">
          Doação {donation?.date?.toLocaleDateString()}
        </Typography>
      </Breadcrumbs>

      <PageTitle>
        Doação
        <CustomStatus dataStatus={donation?.status}>
          {donation?.status}
        </CustomStatus>
      </PageTitle>

      {donation?.deliverMethod === "donator" ? (
        <Typography>
          O doador concordou em levar a doação até uma sede mais próxima
        </Typography>
      ) : (
        <Typography>
          Um funcionário irá buscar no endereço:{" "}
          <b>{donation?.deliverLocation}</b>
        </Typography>
      )}

      <Typography variant="h6" mt={4}>
        Itens
      </Typography>
      <ItemsList items={donation?.items || []} />
    </Box>
  );
};

export default Donation;

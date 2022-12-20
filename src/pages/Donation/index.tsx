import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { CustomStatus } from "../../components/DonationList/styles";
import ItemsList from "../../components/ItemsList";
import PageTitle from "../../components/PageTitle";
import { useAuth } from "../../contexts/Auth";
import { useStore } from "../../contexts/Store";
import { CustomButton } from "../Register/styles";

type NavParams = {
  id: string;
};

const Donation: React.FC = () => {
  const { id } = useParams<NavParams>();

  const { role } = useAuth();
  const store = useStore();

  const donation = store.donations.find((d) => d.id === id);

  if (!donation) return <>Not found</>;

  const handleApprove = () => {
    store.donation.set({ ...donation, status: "em análise" });
  };

  const handleRefuse = () => {
    store.donation.set({ ...donation, status: "recusada" });
  };

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

      {!!donation?.description && (
        <Typography sx={{ my: 4, color: "lightgray" }}>
          {donation?.description}
        </Typography>
      )}

      <Typography variant="h6" mt={4}>
        Itens
      </Typography>
      <ItemsList items={donation?.items || []} />

      {role === "admin" && donation?.status === "na fila" && (
        <Box display="flex" width="100%" alignItems="center" mt={4}>
          <CustomButton variant="outlined" onClick={handleRefuse}>
            Recusar
          </CustomButton>
          <CustomButton
            variant="contained"
            sx={{ px: 8, ml: 2 }}
            onClick={handleApprove}
          >
            Aceitar
          </CustomButton>
        </Box>
      )}
    </Box>
  );
};

export default Donation;

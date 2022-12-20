import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DonationList from "../../components/DonationList";
import PageTitle from "../../components/PageTitle";
import UserProgress from "../../components/UserProgress";
import { useAuth } from "../../contexts/Auth";
import { useStore } from "../../contexts/Store";
import { CustomContainer, CustomSubtitle } from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const { role, token } = useAuth();

  const { donations } = useStore();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <CustomContainer>
      <PageTitle>Início</PageTitle>

      {role === "user" && (
        <UserProgress
          donations={donations.length}
          analysing={donations.filter((d) => d.status === "em análise").length}
          approves={donations.filter((d) => d.status === "completa").length}
          denials={donations.filter((d) => d.status === "recusada").length}
        />
      )}

      <CustomSubtitle>
        {role === "user" ? "Suas doações" : "Pedidos pendentes"}
      </CustomSubtitle>
      <DonationList max={role === "user" ? 5 : 50} donations={donations} />
    </CustomContainer>
  );
};

export default Home;

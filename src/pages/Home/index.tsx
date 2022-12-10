import React from "react";
import DonationList from "../../components/DonationList";
import PageTitle from "../../components/PageTitle";
import UserProgress from "../../components/UserProgress";
import DonationsMock from "../../_mocks_/donations";
import { CustomContainer, CustomSubtitle } from "./styles";

const Home: React.FC = () => {
  return (
    <CustomContainer>
      <PageTitle>Início</PageTitle>

      <UserProgress
        donations={DonationsMock.length}
        analysing={
          DonationsMock.filter((d) => d.status === "em análise").length
        }
        approves={DonationsMock.filter((d) => d.status === "completa").length}
        denials={DonationsMock.filter((d) => d.status === "recusada").length}
      />

      <CustomSubtitle>Suas doações</CustomSubtitle>
      <DonationList max={5} donations={DonationsMock} />
    </CustomContainer>
  );
};

export default Home;

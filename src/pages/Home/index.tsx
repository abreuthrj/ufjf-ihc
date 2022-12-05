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

      <UserProgress />

      <CustomSubtitle>Suas doações</CustomSubtitle>
      <DonationList max={3} donations={DonationsMock} />
    </CustomContainer>
  );
};

export default Home;

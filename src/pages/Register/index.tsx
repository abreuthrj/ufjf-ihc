import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { CustomButton, CustomInput, CustomTitle } from "./styles";

const Register: React.FC = () => {
  return (
    <>
      <Header />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        maxWidth={400}
        margin="auto"
      >
        <CustomTitle variant="h5">Criar conta</CustomTitle>

        <CustomInput fullWidth placeholder="Nome" />
        <CustomInput fullWidth placeholder="Sobrenome" />

        <CustomInput fullWidth placeholder="CPF" />
        <CustomInput fullWidth placeholder="Telefone" />

        <CustomButton fullWidth variant="contained">
          Registrar
        </CustomButton>
        <CustomButton fullWidth variant="outlined">
          Voltar
        </CustomButton>
      </Box>
    </>
  );
};

export default Register;

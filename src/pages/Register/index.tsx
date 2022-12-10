import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { CustomButton, CustomInput, CustomTitle } from "./styles";

const Register: React.FC = () => {
  const navigate = useNavigate();

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
        <CustomButton
          fullWidth
          variant="outlined"
          onClick={() => navigate("/login")}
        >
          Voltar
        </CustomButton>
      </Box>
    </>
  );
};

export default Register;

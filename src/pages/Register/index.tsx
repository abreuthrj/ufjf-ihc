import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as uuid from "uuid";
import { useAuth } from "../../contexts/Auth";
import { CustomButton, CustomInput, CustomTitle } from "./styles";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { update } = useAuth();

  const handleRegister = () => {
    update({
      role: "user",
      token: uuid.v4(),
    });
    navigate("/");
  };

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      maxWidth={400}
      margin="auto"
    >
      <CustomTitle variant="h5">Criar conta</CustomTitle>

      <CustomInput fullWidth placeholder="Nome" />
      <CustomInput fullWidth placeholder="Sobrenome" />

      <CustomInput fullWidth placeholder="CPF" />
      <CustomInput fullWidth placeholder="Telefone" />

      <CustomInput fullWidth type="password" placeholder="Senha" />
      <CustomInput
        fullWidth
        type="password"
        placeholder="Confirmação de Senha"
      />

      <CustomButton fullWidth variant="contained" onClick={handleRegister}>
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
  );
};

export default Register;

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { FormControlLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import {
  AnotherOptions,
  CheckboxLabel,
  Container,
  Content,
  CustomButton,
  CustomInput,
  ErrorFeedback,
  Form,
  InputContainer,
  Links,
  LinksText,
  RememberCheckbox,
  Title,
} from "./styles";

const Login: React.FC = () => {
  interface IUser {
    validEmail: string;
    validPassword: string;
  }
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // User test to a valid login
    const validLogin: IUser = {
      validEmail: "exemplo@gmail.com",
      validPassword: "exemplo123",
    };

    if (
      !(
        email === validLogin.validEmail && password === validLogin.validPassword
      )
    ) {
      setLoginStatus("Error");
    } else {
      navigate("/");
      setLoginStatus("Success");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Title variant="h1">Entrar</Title>
          <Form>
            {loginStatus == "Error" && (
              <ErrorFeedback>Email ou Senha incorretos</ErrorFeedback>
            )}

            <InputContainer>
              <CustomInput
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircleIcon />
                  </InputAdornment>
                }
                placeholder="Endereço de Email"
                type="email"
                onChange={handleEmailInput}
                required
              />
            </InputContainer>
            <InputContainer>
              <CustomInput
                startAdornment={
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                }
                required
                placeholder="Senha"
                type="password"
                onChange={handlePasswordInput}
              />
            </InputContainer>

            <FormControlLabel
              control={<RememberCheckbox />}
              label={<CheckboxLabel>Lembrar-se de mim?</CheckboxLabel>}
            />

            <CustomButton
              variant="contained"
              type="submit"
              onClick={handleSubmit}
            >
              Entrar
            </CustomButton>
            <CustomButton variant="outlined">Esqueceu a senha?</CustomButton>
          </Form>
          <AnotherOptions>
            <LinksText>
              Nao tem uma conta? <Links href="/register">Criar conta</Links>
            </LinksText>
          </AnotherOptions>
        </Content>
      </Container>
    </>
  );
};

export default Login;

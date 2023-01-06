import styled from "@emotion/styled";
import { Button, Checkbox, Input, Link, Typography } from "@mui/material";

export const Container = styled.div`
  margin: 0;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled(Typography)((props) => ({
  fontWeight: 300,
  letterSpacing: 2,
  fontSize: 30,
  marginBottom: 30,
}));

export const ErrorFeedback = styled(Typography)((props) => ({
  textAlign: "left",
  backgroundColor: "#FF807B",
  color: "white",
  padding: 6,
  borderRadius: 4,
  marginBottom: 16,
}));

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const CustomInput = styled(Input)((props) => ({
  marginBottom: 30,
  width: "100%",

  ["@media (max-width: 480px)"]: {
    fontSize: 20,
  },
}));

export const RememberCheckbox = styled(Checkbox)((props) => ({}));

export const CheckboxLabel = styled.label`
  font-size: 16px;
`;

export const CustomButton = styled(Button)((props) => ({
  marginTop: 16,
  fontWeight: 600,
  backgroundColor: props.variant === "outlined" ? "transparent" : "#B000A4",
  borderColor: "#B000A4",
  color: props.variant === "outlined" ? "#B000A4" : "white",
  "&:hover": {
    backgroundColor: props.variant === "outlined" ? "#91008809" : "#910088",
    color: props.variant === "outlined" ? "#910088" : "white",
    borderColor: "#910088",
  },
  ["@media (max-width: 480px)"]: {
    fontSize: 18,
  },
}));

export const AnotherOptions = styled.div`
  display: flex;
`;

export const Links = styled(Link)((props) => ({
  "&:hover": {
    cursor: "pointer",
  },
}));

export const LinksText = styled(Typography)((props) => ({
  fontSize: 16,

  ["@media (max-width: 480px)"]: {
    fontSize: 18,
  },
}));

import styled from "@emotion/styled";
import { Button, Input, Typography } from "@mui/material";

export const CustomInput = styled(Input)((props) => ({
  marginBottom: 14,
}));

export const CustomTitle = styled(Typography)((props) => ({
  fontWeight: 400,
  marginBottom: 12,
}));

export const CustomButton = styled(Button)((props) => ({
  marginTop: 12,
  backgroundColor: props.variant === "outlined" ? "transparent" : "#B000A4",
  borderColor: "#B000A4",
  color: props.variant === "outlined" ? "#B000A4" : "white",
  "&:hover": {
    backgroundColor: props.variant === "outlined" ? "#91008809" : "#910088",
    color: props.variant === "outlined" ? "#910088" : "white",
    borderColor: "#910088",
  },
}));

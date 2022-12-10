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
  backgroundColor: props.variant === "contained" ? "#B000A4" : "transparent",
  borderColor: props.variant === "outlined" ? "#B000A4" : "transparent",
  color: props.variant === "contained" ? "white" : "#B000A4",
  "&:hover": {
    backgroundColor: props.variant === "contained" ? "#910088" : "#91008809",
    color: props.variant === "contained" ? "white" : "#910088",
    borderColor: "#910088",
  },
}));

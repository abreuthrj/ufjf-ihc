import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

export const Progress = styled(CircularProgress)((props) => ({
  margin: "0px 4px",
  position: "relative",
}));

export const Center = styled.div`
  position: absolute;
`;

export const Label = styled.span``;

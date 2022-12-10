import styled from "@emotion/styled";
import { MenuItem } from "@mui/material";

export const CustomContainer = styled.div`
  width: 400px;
  height: 100%;

  background-color: purple;
`;

export const CustomItem = styled(MenuItem)((props) => ({
  color: "white",
  fontSize: 18,
  fontWeight: 500,
  padding: "24px 48px",
}));

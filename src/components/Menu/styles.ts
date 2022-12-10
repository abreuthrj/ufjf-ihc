import styled from "@emotion/styled";
import { MenuItem } from "@mui/material";

export const CustomContainer = styled.div<{ mobileVisible?: boolean }>`
  width: 400px;
  height: 100%;

  background-color: purple;

  transition: 200ms;

  @media screen and (max-width: 400px) {
    position: fixed;
    z-index: 10;
    width: ${(props) => (props.mobileVisible ? "80%" : "0%")};
    opacity: ${(props) => (props.mobileVisible ? "1" : "0")};

    * {
      display: ${(props) => (props.mobileVisible ? "flex" : "none")};
    }
  }
`;

export const CustomItem = styled(MenuItem)((props) => ({
  color: "white",
  fontSize: 18,
  fontWeight: 500,
  padding: "24px 48px",
}));

export const Background = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 9;

  background-color: #00000060;
`;

export const MenuIcon = styled.div`
  display: none;
  position: fixed;

  top: 0px;
  left: 0px;

  margin: 10px;

  @media screen and (max-width: 400px) {
    display: block;
  }
`;

import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { Background, CustomContainer, CustomItem, MenuIcon } from "./styles";

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobile, setMobile] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);

  useEffect(() => {
    const eventListener = () => {
      if (window.innerWidth > 400) {
        setMobile(false);
        setMobileVisible(false);
      } else {
        setMobile(true);
      }
    };
    window.addEventListener("resize", eventListener);

    eventListener();

    return () => {
      window.removeEventListener("resize", eventListener);
    };
  }, []);

  useEffect(() => {
    setMobileVisible(false);
  }, [location]);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <MenuIcon>
        <IconButton
          onClick={() => setMobileVisible(true)}
          sx={{ bgcolor: "#B000A430" }}
        >
          <MdMenu color="white" />
        </IconButton>
      </MenuIcon>

      {mobileVisible && <Background onClick={() => setMobileVisible(false)} />}

      {((mobile && mobileVisible) || !mobile) && (
        <CustomContainer mobileVisible={mobileVisible}>
          <CustomItem onClick={() => navigate("/")}>Home</CustomItem>
          <CustomItem onClick={() => navigate("/donations")}>
            Doações
          </CustomItem>
          <CustomItem onClick={() => navigate("/new-donation")}>
            Cadastrar doação
          </CustomItem>
          <CustomItem onClick={handleLogout}>Logout</CustomItem>
        </CustomContainer>
      )}
    </>
  );
};

export default Menu;

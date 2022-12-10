import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomContainer, CustomItem } from "./styles";

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <CustomContainer>
      <CustomItem onClick={() => navigate("/")}>Home</CustomItem>
      <CustomItem onClick={() => navigate("/donations")}>Doações</CustomItem>
      <CustomItem onClick={() => navigate("/new-donation")}>
        Cadastrar doação
      </CustomItem>
      <CustomItem onClick={handleLogout}>Logout</CustomItem>
    </CustomContainer>
  );
};

export default Menu;

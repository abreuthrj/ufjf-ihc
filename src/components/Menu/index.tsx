import React from "react";
import { CustomContainer, CustomItem } from "./styles";

const Menu: React.FC = () => {
  // const [visible, setVisible] = useState(false);

  return (
    <CustomContainer>
      <CustomItem>Home</CustomItem>
      <CustomItem>Doações</CustomItem>
      <CustomItem>Nova Doação</CustomItem>
      <CustomItem>Logout</CustomItem>
    </CustomContainer>
  );
};

export default Menu;

import React from "react";
import { CustomTitle } from "./styles";

const PageTitle: React.FC<React.PropsWithChildren> = (props) => {
  return <CustomTitle>{props?.children}</CustomTitle>;
};

export default PageTitle;

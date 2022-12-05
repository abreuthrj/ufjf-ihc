import Menu from "../components/Menu";
import { CustomWrapper } from "../routes/styles";

const withGlobals = (component: React.ReactNode) => {
  return (
    <CustomWrapper>
      <Menu />
      {component}
    </CustomWrapper>
  );
};

export default withGlobals;

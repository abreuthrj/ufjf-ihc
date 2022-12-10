import { Box } from "@mui/material";
import Menu from "../components/Menu";
import { CustomWrapper } from "../routes/styles";

const withGlobals = (component: React.ReactNode) => {
  return (
    <CustomWrapper>
      <Menu />

      <Box width="100%" p={4} overflow="hidden">
        {component}
      </Box>
    </CustomWrapper>
  );
};

export default withGlobals;

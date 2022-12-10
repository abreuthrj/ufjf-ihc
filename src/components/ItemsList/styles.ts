import styled from "@emotion/styled";
import { ListItemText } from "@mui/material";
import { IDonation } from "../../@types/donation";
import theme from "../../theme";

export const CustomStatus = styled(ListItemText)<{
  dataStatus?: IDonation["status"];
}>((props) => ({
  span: {
    backgroundColor:
      props.dataStatus === "na fila"
        ? "#03bafc90"
        : props.dataStatus === "em análise"
        ? "#fcba0390"
        : props.dataStatus === "completa"
        ? "#7CF2A9"
        : "#F5795B",
    color: theme.dark,
    fontWeight: 300,
    textAlign: "center",
    padding: "2px 6px",
    width: "110px",
    borderRadius: "8px",
  },
}));

export const CustomTitle = styled(ListItemText)((props) => ({
  span: {
    fontWeight: 600,
    color: theme.dark,
  },
}));

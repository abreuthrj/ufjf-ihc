import styled from "@emotion/styled";
import { ListItemText } from "@mui/material";
import { IDonation } from "../../@types/donation";
import theme from "../../theme";

const statusColor = {
  "na fila": "#03bafc90",
  "em análise": "#fcba0390",
};

export const CustomStatus = styled(ListItemText)<{
  dataStatus?: IDonation["status"];
}>((props) => ({
  span: {
    backgroundColor:
      props.dataStatus === "na fila"
        ? "#fcba0390"
        : props.dataStatus === "em análise"
        ? "#03bafc90"
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

export const CustomDate = styled(ListItemText)((props) => ({
  span: {
    fontWeight: 600,
    color: theme.dark,
  },
}));

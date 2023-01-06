import { List, ListItemButton, ListItemIcon } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IDonation } from "../../@types/donation";
import { CustomDate, CustomStatus } from "./styles";

export type DonationListProps = {
  donations: IDonation[];
  max?: number;
};

const DonationList: React.FC<DonationListProps> = ({ donations, max = 5 }) => {
  const navigate = useNavigate();

  const [display, setDisplay] = useState(max);
  const [loadingMore, setLoadingMore] = useState(false);
  const [filter, setFilter] = useState("");

  const handleMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplay((prev) => prev + max);
      setLoadingMore(false);
    }, 1000);
  };

  const handleListItemClick = (donation: any) => {
    navigate(`/donation/${donation.id}`);
  };

  return (
    <Box>
      <FormControl sx={{ width: 200, marginLeft: "auto", display: "flex" }}>
        <InputLabel id="filter-select-label">Filtro</InputLabel>
        <Select
          fullWidth
          value={filter}
          onChange={(evt) => setFilter(evt.target.value)}
          labelId="filter-select-label"
          label="Filtro"
          sx={{ maxWidth: 200 }}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 48 * 4.5 + 8,
              },
            },
          }}
        >
          <MenuItem value={""}>Todos</MenuItem>
          <MenuItem value={"na fila"}>Na fila</MenuItem>
          <MenuItem value={"em análise"}>Em análise</MenuItem>
          <MenuItem value={"completa"}>Completa</MenuItem>
          <MenuItem value={"recusada"}>Recusada</MenuItem>
        </Select>
      </FormControl>

      <List>
        {donations
          .filter((d) => (filter ? d.status === filter : true))
          .slice(0, display)
          .map((donation) => (
            <ListItemButton
              key={donation.id}
              onClick={() => handleListItemClick(donation)}
            >
              <CustomDate>
                {donation.date.toLocaleDateString(undefined, {
                  dateStyle: "medium",
                })}
              </CustomDate>

              <CustomStatus dataStatus={donation.status}>
                {donation.status}
              </CustomStatus>

              <ListItemIcon>
                <MdChevronRight size={32} />
              </ListItemIcon>
            </ListItemButton>
          ))}
      </List>

      {donations.length > display && (
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button onClick={handleMore} disabled={loadingMore}>
            Ver mais
            {loadingMore && (
              <CircularProgress
                size={12}
                sx={{
                  marginLeft: 1,
                }}
              />
            )}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DonationList;

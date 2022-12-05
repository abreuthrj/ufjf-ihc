import { List, ListItemButton, ListItemIcon } from "@mui/material";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { IDonation } from "../../@types/donation";
import { CustomDate, CustomStatus } from "./styles";

export type DonationListProps = {
  donations: IDonation[];
  max?: number;
};

const DonationList: React.FC<DonationListProps> = ({ donations, max }) => {
  return (
    <List>
      {donations.slice(0, max).map((donation) => (
        <ListItemButton key={donation.id}>
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
  );
};

export default DonationList;

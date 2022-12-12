import {
  Button,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { IDonationItem } from "../../@types/donation";
import { CustomTitle } from "./styles";

export type ItemsListProps = {
  items: IDonationItem[];
  max?: number;
  allowDelete?: boolean;
  onDelete?: (id: string) => void;
};

const ItemsList: React.FC<ItemsListProps> = ({
  items,
  max = 10,
  allowDelete,
  onDelete,
}) => {
  const [display, setDisplay] = useState(max);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplay((prev) => prev + max);
      setLoadingMore(false);
    }, 1000);
  };

  return (
    <Box>
      <List>
        {items.slice(0, display).map((item) => (
          <ListItem
            key={item.id}
            sx={{
              "&:nth-child(even)": {
                backgroundColor: "#fafafa",
              },
            }}
          >
            <CustomTitle>
              {item.qtd || 1}x {item.title}
            </CustomTitle>

            <ListItemText>
              {item.gender
                ? item.gender === "male"
                  ? "Masculino"
                  : item.gender === "female"
                  ? "Feminino"
                  : "Unissex"
                : "Unissex"}
            </ListItemText>

            {allowDelete && (
              <ListItemText>
                <IconButton
                  onClick={onDelete ? () => onDelete(item.id) : undefined}
                >
                  <MdDelete />
                </IconButton>
              </ListItemText>
            )}
          </ListItem>
        ))}
      </List>

      {items.length > display && (
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

export default ItemsList;

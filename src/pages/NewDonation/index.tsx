import {
  Box,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { IDonation, IDonationItem } from "../../@types/donation";
import ItemsList from "../../components/ItemsList";
import PageTitle from "../../components/PageTitle";
import { useStore } from "../../contexts/Store";
import ItemsMock from "../../_mocks_/items";
import { CustomButton } from "../Register/styles";

const FORM_INITIAL: {
  receptionMethod: IDonation["deliverMethod"];
  location: string;
  currentItem: string;
  currentItemQtd: number;
  currentItemGender: string;
  description: string;
  items: IDonationItem[];
} = {
  receptionMethod: "donator",
  location: "",
  currentItem: "",
  currentItemQtd: 1,
  description: "",
  currentItemGender: "unissex",
  items: [],
};

const NewDonation: React.FC = () => {
  const navigate = useNavigate();

  const { donation } = useStore();

  const [
    {
      receptionMethod,
      location,
      currentItem,
      currentItemQtd,
      items,
      description,
      currentItemGender,
    },
    setForm,
  ] = useState(FORM_INITIAL);

  const updateForm = (value: any) => {
    setForm((prev) => ({
      ...prev,
      ...value,
    }));
  };

  const handleAddItem = () => {
    const item = ItemsMock.find((i) => i.id === currentItem);
    if (!item) return;

    setForm((prev) => ({
      ...prev,
      items: prev.items.concat({
        ...item,
        qtd: currentItemQtd,
        gender: currentItemGender,
      }),
    }));
  };

  const handleDeleteItem = (itemId: string) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i.id !== itemId),
    }));
  };

  const handleSubmit = () => {
    toast("Doação cadastrada com sucesso", {
      type: "success",
    });

    donation.add({
      id: v4(),
      date: new Date(),
      status: "na fila",
      deliverMethod: receptionMethod,
      deliverLocation: location,
      description,
      items,
    });

    setForm(FORM_INITIAL);
    navigate("/donations");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Box width="100%">
      <PageTitle>Cadastrar doação</PageTitle>

      <Box
        component="form"
        display="flex"
        flexDirection="column"
        width="100%"
        rowGap={2}
      >
        <FormControl>
          <RadioGroup
            value={receptionMethod}
            onChange={(evt) =>
              updateForm({ receptionMethod: evt.target.value })
            }
          >
            <FormControlLabel
              value="donator"
              control={<Radio />}
              label="Vou levar até a sede mais próxima"
            />
            <FormControlLabel
              value="employee"
              control={<Radio />}
              label="Prefiro que busquem em meu endereço"
            />
          </RadioGroup>
        </FormControl>

        <TextField
          fullWidth
          autoComplete="street-address"
          name="street-address"
          label="Local"
          value={location}
          onChange={(e) => updateForm({ location: e.target.value })}
          disabled={receptionMethod === "donator"}
        />
        <TextField
          multiline
          fullWidth
          label="Observação"
          rows={5}
          value={description}
          onChange={(e) => updateForm({ description: e.target.value })}
        />

        <Box display="flex" columnGap={1}>
          <TextField
            value={currentItemQtd}
            onChange={(evt) =>
              updateForm({ currentItemQtd: Number(evt.target.value) })
            }
            label="Qtd."
            InputProps={{
              endAdornment: <InputAdornment position="end">x</InputAdornment>,
            }}
            sx={{ maxWidth: 80 }}
          />

          <FormControl sx={{ width: 200 }}>
            <InputLabel id="item-select-label">Item</InputLabel>
            <Select
              fullWidth
              value={currentItem}
              onChange={(evt) => updateForm({ currentItem: evt.target.value })}
              labelId="item-select-label"
              label="Item"
              sx={{ maxWidth: 200 }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 48 * 4.5 + 8,
                  },
                },
              }}
            >
              {ItemsMock.map((item) => (
                <MenuItem value={item.id}>{item.title}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: 200 }}>
            <InputLabel id="gender-select-label">Gênero</InputLabel>
            <Select
              fullWidth
              value={currentItemGender}
              onChange={(evt) =>
                updateForm({ currentItemGender: evt.target.value })
              }
              labelId="gender-select-label"
              label="Gênero"
              sx={{ maxWidth: 200 }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    maxHeight: 48 * 4.5 + 8,
                  },
                },
              }}
            >
              <MenuItem value={"unissex"}>Unissex</MenuItem>
              <MenuItem value={"male"}>Masculino</MenuItem>
              <MenuItem value={"female"}>Feminino</MenuItem>
            </Select>
          </FormControl>

          <CustomButton onClick={handleAddItem}>Adicionar Item</CustomButton>
        </Box>

        <Box maxWidth={400}>
          <ItemsList
            allowDelete
            items={items}
            max={20}
            onDelete={handleDeleteItem}
          />
        </Box>

        <Box display="flex" columnGap={1} marginLeft="auto">
          <CustomButton variant="outlined" onClick={handleCancel}>
            Cancelar
          </CustomButton>
          <CustomButton variant="contained" onClick={handleSubmit}>
            Enviar para análise
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default NewDonation;

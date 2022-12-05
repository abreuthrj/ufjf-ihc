import { Box, CircularProgressProps, Typography } from "@mui/material";
import React from "react";
import theme from "../../../theme";
import * as S from "./styles";

type CustomProgressProps = {
  label?: string;
  showValue?: boolean;
  value?: number;
  CircularProgressProps?: CircularProgressProps;
};

const CustomProgress: React.FC<CustomProgressProps> = (props) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mx="auto">
      <Box position="relative">
        <S.Progress {...props.CircularProgressProps} variant="determinate" />

        {props.showValue && (
          <Box
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            left="0"
            top="0"
            right="0"
            bottom="0"
          >
            <Typography fontSize={12} color={theme.gray}>
              {props.CircularProgressProps?.value || 0}%
            </Typography>
          </Box>
        )}
      </Box>

      <Typography color={theme.gray} fontSize={14} mt={1}>
        {props.label}
      </Typography>
    </Box>
  );
};

export default CustomProgress;

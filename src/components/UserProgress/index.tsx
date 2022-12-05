import React from "react";
import CustomProgress from "./CustomProgress";
import * as S from "./styles";

const UserProgress: React.FC = () => {
  return (
    <S.Container>
      <CustomProgress
        showValue
        label="Doações"
        CircularProgressProps={{
          value: 20,
          size: 60,
        }}
      />
      <CustomProgress
        showValue
        label="Aprovações"
        CircularProgressProps={{
          value: 50,
          color: "success",
          size: 60,
        }}
      />
      <CustomProgress
        showValue
        label="Recusas"
        CircularProgressProps={{
          value: 10,
          color: "error",
          size: 60,
        }}
      />
    </S.Container>
  );
};

export default UserProgress;

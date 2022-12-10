import React from "react";
import CustomProgress from "./CustomProgress";
import * as S from "./styles";

export type UserProgressProps = {
  donations: number;
  approves: number;
  denials: number;
  analysing: number;
};

const UserProgress: React.FC<UserProgressProps> = ({
  approves,
  denials,
  donations,
  analysing,
}) => {
  return (
    <S.Container>
      <CustomProgress
        showValue
        label="Em análise"
        CircularProgressProps={{
          value: Math.round((analysing / donations) * 100),
          size: 60,
        }}
      />
      <CustomProgress
        showValue
        label="Aprovações"
        CircularProgressProps={{
          value: Math.round((approves / donations) * 100),
          color: "success",
          size: 60,
        }}
      />
      <CustomProgress
        showValue
        label="Recusas"
        CircularProgressProps={{
          value: Math.round((denials / donations) * 100),
          color: "error",
          size: 60,
        }}
      />
    </S.Container>
  );
};

export default UserProgress;

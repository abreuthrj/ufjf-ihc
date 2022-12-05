import React, { createContext, useContext, useState } from "react";

type TAuth = {
  token?: string;
};

type TAuthContext = {
  get?: TAuth;
  set?: (state: TAuth | ((prev: TAuth) => TAuth)) => void;
};

export const AuthContext = createContext<TAuthContext>({});

export const AuthProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [state, setState] = useState<TAuth>({});

  return (
    <AuthContext.Provider value={{ get: state, set: setState }}>
      {props?.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { get, set } = useContext(AuthContext);

  return {
    ...get,
    set,
  };
};

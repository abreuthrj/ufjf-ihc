import React, { createContext, useContext, useState } from "react";

type TAuth = {
  token?: string;
  role?: "user" | "admin";
};

type TAuthContext = {
  get?: TAuth;
  set?: (state: TAuth | ((prev: TAuth) => TAuth)) => void;
  update: (value: Partial<TAuth>) => void;
};

export const AuthContext = createContext<TAuthContext>({
  update: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [state, setState] = useState<TAuth>({});

  const update = (value: Partial<TAuth>) => {
    setState((prev) => ({ ...prev, ...value }));
  };

  return (
    <AuthContext.Provider value={{ get: state, set: setState, update }}>
      {props?.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { get, set, update } = useContext(AuthContext);

  return {
    ...get,
    set,
    update,
  };
};

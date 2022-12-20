import React, { createContext, useContext, useState } from "react";
import { IDonation } from "../@types/donation";
import DonationsMock from "../_mocks_/donations";

type TStore = {
  donations: IDonation[];
};

type TStoreContext = {
  get: TStore;
  set: (state: TStore | ((prev: TStore) => TStore)) => void;
  update: (value: Partial<TStore>) => void;
  donation: {
    set: (donation: IDonation) => void;
    remove: (id: string) => void;
    add: (donation: IDonation) => void;
  };
};

export const StoreContext = createContext<TStoreContext>({
  get: { donations: [] },
  set: () => {},
  update: () => {},
  donation: {
    set: () => {},
    remove: () => {},
    add: () => {},
  },
});

export const StoreProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [state, setState] = useState<TStore>({
    donations: DonationsMock,
  });

  const update = (value: Partial<TStore>) => {
    setState((prev) => ({ ...prev, ...value }));
  };

  const setDonation = (donation: IDonation) => {
    setState((prev) => ({
      ...prev,
      donations: prev.donations.map((d) => ({
        ...d,
        ...(d.id === donation.id ? donation : {}),
      })),
    }));
  };

  const removeDonation = (id: string) => {
    setState((prev) => ({
      ...prev,
      donations: prev.donations.filter((d) => d.id !== id),
    }));
  };

  const addDonation = (donation: IDonation) => {
    setState((prev) => ({
      ...prev,
      donations: [donation].concat(prev.donations),
    }));
  };

  return (
    <StoreContext.Provider
      value={{
        get: state,
        set: setState,
        update,
        donation: {
          set: setDonation,
          remove: removeDonation,
          add: addDonation,
        },
      }}
    >
      {props?.children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const { get, set, update, donation } = useContext(StoreContext);

  return {
    ...get,
    set,
    update,
    donation,
  };
};

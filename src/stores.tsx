import React from 'react';
import { RangesStore } from './stores/ranges-store';

export function createStores() {
  const rangesStore = new RangesStore();

  return {
    rangesStore,
  };
}

export type Stores = ReturnType<typeof createStores>;

const context = React.createContext<Stores | null>(null);

export const StoresProvider: React.FC<{ stores: Stores }> = ({
  stores,
  children,
}) => {
  const { Provider } = context;

  return <Provider value={stores}>{children}</Provider>;
};

export function useStores() {
  const stores = React.useContext(context);

  if (!stores) {
    throw new Error('stores context was not found.');
  }

  return stores;
}

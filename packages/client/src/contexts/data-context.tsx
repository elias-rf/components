import React from "react";

import type { KnexRequest } from "../lib/knex/knex-request";

export type ClientContext = {
  clientKnex: KnexRequest;
  client: KnexRequest;
};

export const DataContext = React.createContext<ClientContext | null>(null);

export function DataProvider({
  children,
  client,
  clientKnex,
}: {
  children: any;
  client: KnexRequest;
  clientKnex: KnexRequest;
}) {
  return (
    <DataContext.Provider value={{ client, clientKnex }}>
      {children}
    </DataContext.Provider>
  );
}

import type { KnexRequest } from "../lib/knex/knex-request";
import React from "react";

export type ClientContext = {
  clientKnex: KnexRequest;
  client: KnexRequest;
};

const DataContext = React.createContext<ClientContext | null>(null);
export default DataContext;

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

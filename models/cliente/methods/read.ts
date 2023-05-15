import { TConnections } from "@/config/connections";
import { crudReadFactory } from "@/utils/crud/methods/read-factory";
import { cliente } from "../cliente.table";

export const read = ({ connections }: { connections: TConnections }) => {
  return crudReadFactory(connections[cliente.database], cliente);
};

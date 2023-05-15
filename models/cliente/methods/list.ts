import { TConnections } from "@/config/connections";
import { crudListFactory } from "@/utils/crud/methods/list-factory";
import { cliente } from "../cliente.table";

export const list = ({ connections }: { connections: TConnections }) => {
  return crudListFactory(connections[cliente.database], cliente);
};

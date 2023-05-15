import { TConnections } from "@/config/connections";
import { crudReadFactory } from "@/utils/crud/methods/read-factory";
import { produto_item } from "../produto-item.table";

export const readFactory = ({ connections }: { connections: TConnections }) => {
  return crudReadFactory(connections[produto_item.database], produto_item);
};

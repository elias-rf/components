import { TConnections } from "@/config/connections";
import { crudListFactory } from "@/utils/crud/methods/list-factory";
import { produto_item } from "../produto-item.table";

export const listFactory = ({ connections }: { connections: TConnections }) => {
  return crudListFactory(connections[produto_item.database], produto_item);
};

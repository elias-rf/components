import { TConnections } from "@/config/connections";
import { crudListFactory } from "@/utils/crud/methods/list-factory";
import { produto_plano } from "../produto-plano.table";

export const listFactory = ({ connections }: { connections: TConnections }) => {
  return crudListFactory(connections[produto_plano.database], produto_plano);
};

import { TConnections } from "@/config/connections";
import { crudReadFactory } from "@/utils/crud/methods/read-factory";
import { produto_plano } from "../produto-plano.table";

export const readFactory = ({ connections }: { connections: TConnections }) => {
  return crudReadFactory(connections[produto_plano.database], produto_plano);
};

import { TConnections } from "@/config/connections";
import { crudReadFactory } from "@/utils/crud/methods/read-factory";
import { ordem_producao } from "../ordem-producao.table";

export const readFactory = ({ connections }: { connections: TConnections }) => {
  return crudReadFactory(connections[ordem_producao.database], ordem_producao);
};

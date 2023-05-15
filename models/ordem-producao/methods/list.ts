import { TConnections } from "@/config/connections";
import { crudListFactory } from "@/utils/crud/methods/list-factory";
import { ordem_producao } from "../ordem-producao.table";

export const listFactory = ({ connections }: { connections: TConnections }) => {
  return crudListFactory(connections[ordem_producao.database], ordem_producao);
};

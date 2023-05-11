import { TConnections } from "@/config/connections";
import { listFactory } from "@/utils/crud/methods/list-factory";
import { ordem_producao } from "../ordem-producao.table";

export const list = ({ connections }: { connections: TConnections }) => {
  return listFactory(connections[ordem_producao.database], ordem_producao);
};

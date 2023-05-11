import { TConnections } from "@/config/connections";
import { readFactory } from "@/utils/crud/methods/read-factory";
import { ordem_producao } from "../ordem-producao.table";

export const read = ({ connections }: { connections: TConnections }) => {
  return readFactory(connections[ordem_producao.database], ordem_producao);
};

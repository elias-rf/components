import { TConnections } from "@/config/connections";
import { crudReadFactory } from "@/utils/crud/methods/read-factory";
import { ordem_producao_operacao } from "../ordem-producao-operacao.table";

export const readFactory = ({ connections }: { connections: TConnections }) => {
  return crudReadFactory(
    connections[ordem_producao_operacao.database],
    ordem_producao_operacao
  );
};

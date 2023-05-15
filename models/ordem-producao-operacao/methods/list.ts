import { TConnections } from "@/config/connections";
import { crudListFactory } from "@/utils/crud/methods/list-factory";
import { ordem_producao_operacao } from "../ordem-producao-operacao.table";

export const listFactory = ({ connections }: { connections: TConnections }) => {
  return crudListFactory(
    connections[ordem_producao_operacao.database],
    ordem_producao_operacao
  );
};

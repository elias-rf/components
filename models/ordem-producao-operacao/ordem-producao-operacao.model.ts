import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { ordemProducaoOperacaoMethods } from "./model.methods";
import { ordem_producao_operacao } from "./ordem-producao-operacao.table";

export function ordemProducaoOperacaoModelFactory({
  connections,
}: {
  connections: TConnections;
}) {
  const connection = connections[ordem_producao_operacao.database];
  const crud = crudFactory(connection, ordem_producao_operacao);
  const methods = ordemProducaoOperacaoMethods(connection);

  const model = {
    connection,
    table: ordem_producao_operacao,
    query: {
      list: crud.query.list,
      read: crud.query.read,
      diario: methods.query.diario,
      mensal: methods.query.mensal,
      modelo: methods.query.modelo,
      produto: methods.query.produto,
      turno: methods.query.turno,
    },
    mutation: {
      create: crud.mutation.create,
      update: crud.mutation.update,
      del: crud.mutation.del,
    },
  };

  return model;
}

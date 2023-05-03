import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { ordemProducaoOperacaoMethods } from "./model.methods";
import { ordem_producao_operacao } from "./ordem-producao-operacao.table";
import type { TOrdemProducaoOperacaoModel } from "./ordem-producao-operacao.type";

export function ordemProducaoOperacaoModelFactory({
  connections,
}: {
  connections: TConnections;
}): TOrdemProducaoOperacaoModel {
  const connection = connections[ordem_producao_operacao.database];
  const crud = crudFactory(connection, ordem_producao_operacao);
  const methods = ordemProducaoOperacaoMethods(connection);

  const model: TOrdemProducaoOperacaoModel = {
    connection,
    table: ordem_producao_operacao,
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
      diario: (args) => methods.query.diario(args),
      mensal: (args) => methods.query.mensal(args),
      modelo: (args) => methods.query.modelo(args),
      produto: (args) => methods.query.produto(args),
      turno: (args) => methods.query.turno(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
    },
  };

  return model;
}

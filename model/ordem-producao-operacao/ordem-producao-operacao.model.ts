
import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { ordem_producao_operacao } from "./ordem-producao-operacao.table";
import type { TOrdemProducaoOperacaoModel } from "./ordem-producao-operacao.type";
//#region import
import { ordemProducaoOperacaoMethods } from "./model.methods";
//#endregion

export function ordemProducaoOperacaoModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TOrdemProducaoOperacaoModel {

  const connection = connections[ordem_producao_operacao.database]
  const crud = crudFactory(
    connection,
    ordem_producao_operacao
  );

  //#region def
  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      ...ordemProducaoOperacaoMethods(
        connections[ordem_producao_operacao.database]
      ).query,
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      //#endregion
    },
    connection,
    ordem_producao_operacao,
  } as TOrdemProducaoOperacaoModel;

  return model
}

//#region other
//#endregion

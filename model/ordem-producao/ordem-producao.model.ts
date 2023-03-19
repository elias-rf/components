import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { TEtiquetaExternaRpc } from "../etiqueta-externa/etiqueta-externa.type";
import { TOrdemProducaoOperacaoRpc } from "../ordem-producao-operacao/ordem-producao-operacao.type";
import { TProdutoItemRpc } from "../produto-item/produto-item.type";
import { ordemProducaoMethods } from "./model-methods";
import { ordem_producao } from "./ordem-producao.table";
import type { TOrdemProducaoModel } from "./ordem-producao.type";

export function ordemProducaoModelFactory({
  connections,
  etiquetaExternaModel,
  ordemProducaoOperacaoModel,
  produtoItemModel,
}: {
  connections: TConnections;
  etiquetaExternaModel: TEtiquetaExternaRpc;
  ordemProducaoOperacaoModel: TOrdemProducaoOperacaoRpc;
  produtoItemModel: TProdutoItemRpc;
}): TOrdemProducaoModel {
  const connection = connections[ordem_producao.database];
  const crud = crudFactory(connection, ordem_producao);
  const methods = ordemProducaoMethods({
    crud,
    etiquetaExternaModel,
    ordemProducaoOperacaoModel,
    produtoItemModel,
  });

  const model = {
    query: {
      ...crud.query,
      ...methods.query,
    },
    mutation: {
      ...crud.mutation,
      ...methods.mutation,
    },
    connection,
    table: ordem_producao,
  } as TOrdemProducaoModel;

  return model;
}

//#region other
//#endregion

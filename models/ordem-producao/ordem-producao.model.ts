import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { TEtiquetaExternaRpc } from "../etiqueta-externa/etiqueta-externa.type";
import { TOrdemProducaoOperacaoRpc } from "../ordem-producao-operacao/ordem-producao-operacao.type";
import { TProdutoItemRpc } from "../produto-item/produto-item.type";
import { ordemProducaoMethods } from "./methods";
import { ordem_producao } from "./ordem-producao.table";

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
}) {
  const connection = connections[ordem_producao.database];
  const crud = crudFactory(connection, ordem_producao);
  const methods = ordemProducaoMethods({
    crud,
    etiquetaExternaModel,
    ordemProducaoOperacaoModel,
    produtoItemModel,
  });

  const model = {
    connection,
    table: ordem_producao,
    query: {
      ...crud.query,
      controle: methods.query.controle,
      dataFabricacao: methods.query.dataFabricacao,
      dataValidade: methods.query.dataValidade,
      ehControleValido: methods.query.ehControleValido,
      etiquetaExterna: methods.query.etiquetaExterna,
      fromControle: methods.query.fromControle,
      produtoItem: methods.query.produtoItem,
      produtoPlano: methods.query.produtoPlano,
    },
    mutation: {
      ...crud.mutation,
    },
  };

  return model;
}

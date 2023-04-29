import { crudFactory } from "@mono/utils/crud/crud.factory";
import type { TConnections } from "../connections";
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

  const model: TOrdemProducaoModel = {
    connection,
    table: ordem_producao,
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
      controle: (args) => methods.query.controle(args),
      dataFabricacao: (args) => methods.query.dataFabricacao(args),
      dataValidade: (args) => methods.query.dataValidade(args),
      ehControleValido: (args) => methods.query.ehControleValido(args),
      etiquetaExterna: (args) => methods.query.etiquetaExterna(args),
      fromControle: (args) => methods.query.fromControle(args),
      produtoItem: (args) => methods.query.produtoItem(args),
      produtoPlano: (args) => methods.query.produtoPlano(args),
    },
    mutation: {
      create: (args) => crud.mutation.create(args),
      update: (args) => crud.mutation.update(args),
      del: (args) => crud.mutation.del(args),
    },
  };

  return model;
}

import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types";
import { nf_entrada } from "./nf-entrada.table";
import type { TNfEntradaModel } from "./nf-entrada.type";
//#region import
import { TEstoqueRpc } from "../estoque/estoque.type";
import { TNfEntradaControleRpc } from "../nf-entrada-controle/nf-entrada-controle.type";
import { TNfEntradaItemRpc } from "../nf-entrada-item/nf-entrada-item.type";
import { TNfEntradaLogRpc } from "../nf-entrada-log/nf-entrada-log.type";
import { TOrdemProducaoRpc } from "../ordem-producao/ordem-producao.type";
import { TProdutoControleRpc } from "../produto-controle/produto-controle.type";
import { TProdutoEstatisticaRpc } from "../produto-estatistica/produto-estatistica.type";
import { nfEntradaMethodsFactory } from "./model-methods";
//#endregion

export function nfEntradaModelFactory(
  //#region inject
  {
    connections,
    ordemProducaoModel,
    estoqueModel,
    produtoEstatisticaModel,
    nfEntradaLogModel,
    nfEntradaItemModel,
    produtoControleModel,
    nfEntradaControleModel,
  }: {
    connections: TConnections;

    ordemProducaoModel: TOrdemProducaoRpc;
    estoqueModel: TEstoqueRpc;
    produtoEstatisticaModel: TProdutoEstatisticaRpc;
    nfEntradaLogModel: TNfEntradaLogRpc;
    nfEntradaItemModel: TNfEntradaItemRpc;
    produtoControleModel: TProdutoControleRpc;
    nfEntradaControleModel: TNfEntradaControleRpc;
  }
): //#endregion
TNfEntradaModel {
  const connection = connections[nf_entrada.database];
  const crud = crudFactory(connection, nf_entrada);

  //#region def

  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      // Transfere produtos acabados da matriz para filial
      ...nfEntradaMethodsFactory({
        ordemProducaoModel,
        estoqueModel,
        produtoEstatisticaModel,
        nfEntradaModel: crud,
        nfEntradaLogModel,
        nfEntradaItemModel,
        produtoControleModel,
        nfEntradaControleModel,
      }).mutation,

      //#endregion
    },
    connection,
    nf_entrada,
  } as TNfEntradaModel;

  return model;
}

//#region other
//#endregion
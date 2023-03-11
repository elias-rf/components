import { TEstoqueRpc } from "../../estoque/estoque.type";
import { TNfEntradaControleRpc } from "../../nf-entrada-controle/nf-entrada-controle.type";
import { TNfEntradaItemRpc } from "../../nf-entrada-item/nf-entrada-item.type";
import { TNfEntradaLogRpc } from "../../nf-entrada-log/nf-entrada-log.type";
import { TOrdemProducaoRpc } from "../../ordem-producao/ordem-producao.type";
import { TProdutoControleRpc } from "../../produto-controle/produto-controle.type";
import { TProdutoEstatisticaRpc } from "../../produto-estatistica/produto-estatistica.type";
import { TNfEntradaCrud } from "../nf-entrada.type";
import { transferenciaCreateFactory } from "./transferencia-create";

export function nfEntradaMethodsFactory({
  ordemProducaoModel,
  nfEntradaModel,
  estoqueModel,
  produtoEstatisticaModel,
  nfEntradaLogModel,
  nfEntradaItemModel,
  produtoControleModel,
  nfEntradaControleModel,
}: {
  ordemProducaoModel: TOrdemProducaoRpc;
  nfEntradaModel: TNfEntradaCrud;
  estoqueModel: TEstoqueRpc;
  produtoEstatisticaModel: TProdutoEstatisticaRpc;
  nfEntradaLogModel: TNfEntradaLogRpc;
  nfEntradaItemModel: TNfEntradaItemRpc;
  produtoControleModel: TProdutoControleRpc;
  nfEntradaControleModel: TNfEntradaControleRpc;
}) {
  return {
    mutation: {
      transferenciaCreate: transferenciaCreateFactory({
        ordemProducaoModel,
        nfEntradaModel,
        estoqueModel,
        produtoEstatisticaModel,
        nfEntradaLogModel,
        nfEntradaItemModel,
        produtoControleModel,
        nfEntradaControleModel,
      }),
    },
  };
}

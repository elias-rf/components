import {
  TCreateArgs,
  TDelArgs,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "@/types";
import { crudFactory } from "@/utils/crud/crud.factory";
import type { TConnections } from "../../config/connections";
import { TEstoqueRpc } from "../estoque/estoque.type";
import { TNfEntradaControleRpc } from "../nf-entrada-controle/nf-entrada-controle.type";
import { TNfEntradaItemRpc } from "../nf-entrada-item/nf-entrada-item.type";
import { TNfEntradaLogRpc } from "../nf-entrada-log/nf-entrada-log.type";
import { TOrdemProducaoRpc } from "../ordem-producao/ordem-producao.type";
import { TProdutoControleRpc } from "../produto-controle/produto-controle.type";
import { TProdutoEstatisticaRpc } from "../produto-estatistica/produto-estatistica.type";
import { nfEntradaMethodsFactory } from "./model-methods";
import { nf_entrada } from "./nf-entrada.table";

export function nfEntradaModelFactory({
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
}) {
  const connection = connections[nf_entrada.database];
  const crud = crudFactory(connection, nf_entrada);
  const methods = nfEntradaMethodsFactory({
    ordemProducaoModel,
    estoqueModel,
    produtoEstatisticaModel,
    nfEntradaModel: crud,
    nfEntradaLogModel,
    nfEntradaItemModel,
    produtoControleModel,
    nfEntradaControleModel,
  });

  const model = {
    query: {
      list: (args: TListArgs) => crud.query.list(args),
      read: (args: TReadArgs) => crud.query.read(args),
    },
    mutation: {
      create: (args: TCreateArgs) => crud.mutation.create(args),
      update: (args: TUpdateArgs) => crud.mutation.update(args),
      del: (args: TDelArgs) => crud.mutation.del(args),
      transferenciaCreate: (args: { controles: string[] }) =>
        methods.mutation.transferenciaCreate(args),
    },
  };

  return model;
}

import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { Connections } from "dal/connections";
import {
  ProdutoPlanoModel,
  ProdutoPlanoRecord,
} from "../model/plano/produto-plano.model";

export interface ProdutoPlanoRpc {
  produtoPlanoList(listArgs: ListArgs): Promise<ProdutoPlanoRecord[]>;
  produtoPlanoRead(readArgs: ReadArgs): Promise<ProdutoPlanoRecord>;
  produtoPlanoDel(delArgs: DelArgs): Promise<number>;
  produtoPlanoCreate(
    createArgs: CreateArgs<ProdutoPlanoRecord>
  ): Promise<string[]>;
  produtoPlanoUpdate(updateArgs: UpdateArgs<ProdutoPlanoRecord>): Promise<any>;
}

export function ProdutoPlano(connections: Connections): ProdutoPlanoRpc {
  const produtoPlanoModel = new ProdutoPlanoModel(connections);

  return {
    // LIST
    async produtoPlanoList({ where, orderBy, limit = 1000, select }) {
      return produtoPlanoModel.list(where, orderBy, limit, select);
    },

    // READ
    async produtoPlanoRead({ id, select }) {
      return produtoPlanoModel.read(id, select);
    },

    // DEL
    async produtoPlanoDel({ id }) {
      return produtoPlanoModel.del(id);
    },

    // CREATE
    async produtoPlanoCreate({ data }) {
      return produtoPlanoModel.create(data);
    },

    // UPDATE
    async produtoPlanoUpdate({ id, data }) {
      return produtoPlanoModel.update(id, data);
    },
  };
}

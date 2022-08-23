import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { TConnections } from "dal/connections";
import { ProdutoCategoriaModel, TProdutoCategoria } from "../model";

export interface TProdutoCategoriaRpc {
  produtoCategoriaList(listArgs: ListArgs): Promise<TProdutoCategoria[]>;
  produtoCategoriaRead(readArgs: ReadArgs): Promise<TProdutoCategoria>;
  produtoCategoriaDel(delArgs: DelArgs): Promise<number>;
  produtoCategoriaCreate(
    createArgs: CreateArgs<TProdutoCategoria>
  ): Promise<string[]>;
  produtoCategoriaUpdate(
    updateArgs: UpdateArgs<TProdutoCategoria>
  ): Promise<any>;
}

export function produtoCategoriaRpc(
  connections: TConnections
): TProdutoCategoriaRpc {
  const produtoCategoriaModel = new ProdutoCategoriaModel(connections);

  return {
    // LIST
    async produtoCategoriaList({ where, orderBy, limit = 1000, select }) {
      return produtoCategoriaModel.list(where, orderBy, limit, select);
    },

    // READ
    async produtoCategoriaRead({ id, select }) {
      return produtoCategoriaModel.read(id, select);
    },

    // DEL
    async produtoCategoriaDel({ id }) {
      return produtoCategoriaModel.del(id);
    },

    // CREATE
    async produtoCategoriaCreate({ data }) {
      return produtoCategoriaModel.create(data);
    },

    // UPDATE
    async produtoCategoriaUpdate({ id, data }) {
      return produtoCategoriaModel.update(id, data);
    },
  };
}

import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { Connections } from "dal/connections";
import {
  ProdutoCategoriaModel,
  ProdutoCategoriaRecord,
} from "../model/plano/produto-categoria.model";

export interface ProdutoCategoriaRpc {
  produtoCategoriaList(listArgs: ListArgs): Promise<ProdutoCategoriaRecord[]>;
  produtoCategoriaRead(readArgs: ReadArgs): Promise<ProdutoCategoriaRecord>;
  produtoCategoriaDel(delArgs: DelArgs): Promise<number>;
  produtoCategoriaCreate(
    createArgs: CreateArgs<ProdutoCategoriaRecord>
  ): Promise<string[]>;
  produtoCategoriaUpdate(
    updateArgs: UpdateArgs<ProdutoCategoriaRecord>
  ): Promise<any>;
}

export function ProdutoCategoria(
  connections: Connections
): ProdutoCategoriaRpc {
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

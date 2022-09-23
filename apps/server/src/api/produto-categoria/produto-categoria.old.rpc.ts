import { CreateArgs, DelArgs, ListArgs, ReadArgs, UpdateArgs } from "@er/types";
import { TConnections } from "../../dal/connections";
import { ProdutoCategoriaModel } from "./produto-categoria.model";
import { TProdutoCategoria } from "./produto-categoria.type";

export interface TProdutoCategoriaRpc {
  produtoCategoriaList(listArgs: ListArgs): Promise<TProdutoCategoria[]>;
  produtoCategoriaRead(readArgs: ReadArgs): Promise<TProdutoCategoria>;
  produtoCategoriaDel(delArgs: DelArgs): Promise<number>;
  produtoCategoriaCreate(createArgs: CreateArgs): Promise<TProdutoCategoria>;
  produtoCategoriaUpdate(updateArgs: UpdateArgs): Promise<TProdutoCategoria>;
}

export function produtoCategoriaRpc(
  connections: TConnections
): TProdutoCategoriaRpc {
  const produtoCategoriaModel = new ProdutoCategoriaModel(connections);

  return {
    // LIST
    async produtoCategoriaList(args) {
      return produtoCategoriaModel.list(args);
    },

    // READ
    async produtoCategoriaRead(args) {
      return produtoCategoriaModel.read(args);
    },

    // DEL
    async produtoCategoriaDel(args) {
      return produtoCategoriaModel.del(args);
    },

    // CREATE
    async produtoCategoriaCreate(args) {
      return produtoCategoriaModel.create(args);
    },

    // UPDATE
    async produtoCategoriaUpdate(args) {
      return produtoCategoriaModel.update(args);
    },
  };
}

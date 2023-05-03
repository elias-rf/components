import type { TConnections } from "@/config/connections";
import { crudFactory } from "@/utils/crud/crud.factory";
import { TProdutoPlanoRpc } from "../produto-plano/produto-plano.type";
import { produtoItemMethods } from "./model.methods";
import { produto_item } from "./produto-item.table";
import type { TProdutoItemModel } from "./produto-item.type";

export function produtoItemModelFactory({
  connections,
  produtoPlanoModel,
}: {
  connections: TConnections;
  produtoPlanoModel: TProdutoPlanoRpc;
}): TProdutoItemModel {
  const connection = connections[produto_item.database];
  const crud = crudFactory(connection, produto_item);
  const methods = produtoItemMethods({
    produtoPlanoModel,
    produtoItemCrud: crud,
    produto_item,
  });

  const model: TProdutoItemModel = {
    query: {
      list: (args) => crud.query.list(args),
      read: (args) => crud.query.read(args),
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

//#region other
//#endregion

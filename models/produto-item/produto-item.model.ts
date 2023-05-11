import type { TConnections } from "@/config/connections";
import { TProdutoPlanoModel } from "@/models/produto-plano/produto-plano.model";
import { TIds, TListArgs, TReadArgs, TSelect } from "@/types";
import { crudFactory } from "@/utils/crud/crud.factory";
import { produtoItemMethods } from "./model.methods";
import { produto_item } from "./produto-item.table";

export function produtoItemModelFactory({
  connections,
  produtoPlanoModel,
}: {
  connections: TConnections;
  produtoPlanoModel: TProdutoPlanoModel;
}) {
  const connection = connections[produto_item.database];
  const crud = crudFactory(connection, produto_item);
  const methods = produtoItemMethods({
    produtoPlanoModel,
    produtoItemCrud: crud,
    produto_item,
  });

  const model = {
    query: {
      list: (args: TListArgs) => crud.query.list(args),
      read: (args: TReadArgs) => crud.query.read(args),
      produtoPlano: (args: { ids: TIds; select?: TSelect }) =>
        methods.query.produtoPlano(args),
    },
    mutation: {
      ...crud.mutation,
    },
  };

  return model;
}

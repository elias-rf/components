//--
import { TTableDef } from "@mono/types";
import { TCrud } from "@mono/utils/crud/crud.type";
import { TProdutoPlanoRpc } from "../../produto-plano/produto-plano.type";
import { produtoPlano } from "./produto-plano";

export function produtoItemMethods({
  produtoPlanoModel,
  produtoItemCrud,
  produto_item,
}: {
  produtoPlanoModel: TProdutoPlanoRpc;
  produtoItemCrud: TCrud;
  produto_item: TTableDef;
}) {
  return {
    query: {
      produtoPlano: produtoPlano({
        produtoPlanoModel,
        produtoItemCrud,
        produto_item,
      }),
    },
  };
}
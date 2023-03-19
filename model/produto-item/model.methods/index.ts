//--
import { TCrud } from "../../../server/lib/crud/crud.type";
import { TTableDef } from "../../../types";
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

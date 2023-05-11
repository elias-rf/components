//--
import { TProdutoPlanoModel } from "@/models/produto-plano/produto-plano.model";
import { TTableDef } from "@/types";
import { TCrud } from "@/utils/crud/crud.factory";
import { produtoPlano } from "./produto-plano";

export function produtoItemMethods({
  produtoPlanoModel,
  produtoItemCrud,
  produto_item,
}: {
  produtoPlanoModel: TProdutoPlanoModel;
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

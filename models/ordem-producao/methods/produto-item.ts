import { TIds } from "@/types";
import { TCrud } from "@/utils/crud/crud.factory";
import {
  TProdutoItemModel,
  TProdutoItemSelect,
} from "../../produto-item/produto-item.type";

// Retorna numero de controle a partir da ordem de producao e numero de serie
export function produtoItemFactory({
  crud,
  produtoItemModel,
}: {
  crud: TCrud;
  produtoItemModel: TProdutoItemModel;
}) {
  return async ({
    ids,
    select,
  }: {
    ids: TIds;
    select?: TProdutoItemSelect;
  }) => {
    const ordemProducao = await crud.query.read({
      ids,
      select: ["produto_item_id"],
    });

    if (ordemProducao.produto_item_id === undefined) {
      return {};
    }
    return produtoItemModel.query.read({
      id: { produto_item_id: ordemProducao.produto_item_id },
      select,
    });
  };
}

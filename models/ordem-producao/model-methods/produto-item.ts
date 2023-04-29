import { TCrud } from "@mono/utils/crud/crud.type";
import {
  TProdutoItemModel,
  TProdutoItemSelect,
} from "../../produto-item/produto-item.type";
import { TOrdemProducaoIds } from "../ordem-producao.type";

// Retorna numero de controle a partir da ordem de producao e numero de serie
export function produtoItemFactory({
  crud,
  produtoItemModel,
}: {
  crud: TCrud;
  produtoItemModel: TProdutoItemModel;
}) {
  return async ({
    id,
    select,
  }: {
    id: TOrdemProducaoIds;
    select?: TProdutoItemSelect;
  }) => {
    const ordemProducao = await crud.query.read({
      id,
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

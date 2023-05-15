import type { TModels } from "@/models/models";
import type { TIds } from "@/types";
import type { TProdutoItemSelect } from "../../produto-item/produto-item.type";

// Retorna numero de controle a partir da ordem de producao e numero de serie
export function produtoItemFactory({ models }: { models: TModels }) {
  return async ({
    ids,
    select,
  }: {
    ids: TIds;
    select?: TProdutoItemSelect;
  }) => {
    const ordemProducao = await models.ordemProducao.query.read({
      ids,
      select: ["produto_item_id"],
    });

    if (ordemProducao.produto_item_id === undefined) {
      return {};
    }
    return models.produtoItem.query.read({
      ids: [{ id: "produto_item_id", value: ordemProducao.produto_item_id }],
      select,
    });
  };
}

import { TModels } from "@/models/models";
import { TIds } from "@/types";
import { TProdutoPlanoSelect } from "../../produto-plano/produto-plano.type";

export function produtoPlanoFactory({ models }: { models: TModels }) {
  return async ({
    ids,
    select,
  }: {
    ids: TIds;
    select?: TProdutoPlanoSelect;
  }) => {
    const { produto_item_id } = await models.ordemProducao.query.produtoItem({
      ids,
    });

    return await models.produtoItem.query.produtoPlano({
      ids: [
        {
          id: "produto_item_id",
          value: produto_item_id,
        },
      ],
      select,
    });
  };
}

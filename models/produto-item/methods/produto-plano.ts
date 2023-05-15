import { TModels } from "@/models/models";
import { TIds, TSelect } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { produto_item } from "../../produto-item/produto-item.table";

export function produtoPlanoFactory({ models }: { models: TModels }) {
  return async ({ ids, select }: { ids: TIds; select?: TSelect }) => {
    assertIds(ids, produto_item.fields);

    let { produto_plano_id } = await models.produtoItem.query.read({
      ids,
      select: ["produto_plano_id"],
    });

    if (produto_plano_id) {
      produto_plano_id = produto_plano_id?.trim();
      return models.produtoPlano.query.read({
        ids: [{ id: "produto_plano_id", value: produto_plano_id }],
        select,
      });
    }
    return [];
  };
}

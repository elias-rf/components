import { TProdutoPlanoModel } from "@/models/produto-plano/produto-plano.model";
import { TIds, TSelect, TTableDef } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { assertSelect } from "@/utils/asserts/assert-select";
import { TCrud } from "@/utils/crud/crud.factory";
import { produto_plano } from "../../produto-plano/produto-plano.table";

export function produtoPlano({
  produtoPlanoModel,
  produtoItemCrud,
  produto_item,
}: {
  produtoPlanoModel: TProdutoPlanoModel;
  produtoItemCrud: TCrud;
  produto_item: TTableDef;
}) {
  return async ({ ids, select }: { ids: TIds; select?: TSelect }) => {
    assertIds(ids, produto_item.fields);
    assertSelect(select || [], produto_plano.fields);

    let { produto_plano_id } = await produtoItemCrud.query.read({
      ids,
      select: ["produto_plano_id"],
    });
    if (produto_plano_id) {
      produto_plano_id = produto_plano_id?.trim();
      return produtoPlanoModel.query.read({
        ids: [{ id: "produto_plano_id", value: produto_plano_id }],
        select,
      });
    }
    return [];
  };
}

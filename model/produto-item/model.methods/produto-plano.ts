import { TCrud } from "../../../server/lib/crud/crud.type";
import { TTableDef } from "../../../types";
import { isSelect } from "../../../utils/validate/is-select";
import { zIdClient } from "../../../utils/zod/z-id-client";
import { produto_plano } from "../../produto-plano/produto-plano.table";
import {
  TProdutoPlano,
  TProdutoPlanoRpc,
} from "../../produto-plano/produto-plano.type";
import { TProdutoItemPlanoProduto } from "../produto-item.type";

export function produtoPlano({
  produtoPlanoModel,
  produtoItemCrud,
  produto_item,
}: {
  produtoPlanoModel: TProdutoPlanoRpc;
  produtoItemCrud: TCrud;
  produto_item: TTableDef;
}): TProdutoItemPlanoProduto {
  return async ({ id, select }) => {
    zIdClient(id, produto_item.fields);
    isSelect(select || [], produto_plano.fields);

    let { produto_plano_id } = await produtoItemCrud.query.read({
      id,
      select: ["produto_plano_id"],
    });
    if (produto_plano_id) {
      produto_plano_id = produto_plano_id?.trim();
      return produtoPlanoModel.query.read({
        id: { produto_plano_id },
        select,
      });
    }
    return [] as TProdutoPlano;
  };
}

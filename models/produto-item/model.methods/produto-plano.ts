import { TTableDef } from "@mono/types";
import { TCrud } from "@mono/utils/crud/crud.type";
import { isSelect } from "@mono/utils/validate/is-select";
import { zIdClient } from "@mono/utils/zod/z-id-client";
import { produto_plano } from "../../produto-plano/produto-plano.table";
import {
  TProdutoPlano,
  TProdutoPlanoRpc,
} from "../../produto-plano/produto-plano.type";
import { TProdutoItemProdutoPlano } from "../produto-item.type";

export function produtoPlano({
  produtoPlanoModel,
  produtoItemCrud,
  produto_item,
}: {
  produtoPlanoModel: TProdutoPlanoRpc;
  produtoItemCrud: TCrud;
  produto_item: TTableDef;
}): TProdutoItemProdutoPlano {
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
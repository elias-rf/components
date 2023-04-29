import { TCrud } from "@mono/utils/crud/crud.type";
import { TProdutoItemModel } from "../../produto-item/produto-item.type";
import { TProdutoPlanoSelect } from "../../produto-plano/produto-plano.type";
import { TOrdemProducaoIds } from "../ordem-producao.type";

export function produtoPlanoFactory({
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
    select?: TProdutoPlanoSelect;
  }) => {
    const { produto_item_id } = await crud.query.read({
      id,
      select: ["produto_item_id"],
    });

    return await produtoItemModel.query.produtoPlano({
      id: {
        produto_item_id,
      },
      select,
    });
  };
}

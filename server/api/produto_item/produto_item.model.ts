import { TIds, TSelect } from "../../../types";
import { TProdutoPlano } from "../../../types/produto_plano.type";
import { TConnections } from "../../dal/connections";
import { crudModel } from "../crud/crud.model";

/**
 * produto_item.produto_item_id = tbl_Produto_Item.kProdutoItem
 * produto_item.produto_plano_id__produto_plano.produto_plano_id = tbl_Produto_Item.IdVisiontech__CadPro.CdProduto
 * produto_item.produto_id__produto.produto_id = tbl_Produto_Item.fkProduto__tbl_Produto.kProduto
 */

export function produtoItemModel(connections: TConnections) {
  const crud = crudModel(connections);

  return {
    async produtoPlano({
      id,
      select,
    }: {
      id: TIds;
      select?: TSelect;
    }): Promise<TProdutoPlano> {
      let { produto_plano_id } = await crud.read({
        table: "produto_item",
        id,
        select: ["produto_plano_id"],
      });
      if (produto_plano_id) {
        produto_plano_id = produto_plano_id?.trim();
        return crud.read({
          table: "produto_plano",
          id: { produto_plano_id },
          select,
        });
      }
      return [] as TProdutoPlano;
    },
  };
}

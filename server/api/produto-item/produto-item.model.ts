import { Ids, Select } from "../../../types";
import { TProdutoItem } from "../../../types/produto-item.type";
import { TProdutoPlano } from "../../../types/produto-plano.type";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { CrudModel } from "../crud/crud.model";

/**
 * produto_item.produto_item_id = tbl_Produto_Item.kProdutoItem
 * produto_item.produto_plano_id__produto_plano.produto_plano_id = tbl_Produto_Item.IdVisiontech__CadPro.CdProduto
 * produto_item.produto_id__produto.produto_id = tbl_Produto_Item.fkProduto__tbl_Produto.kProduto
 */

export class ProdutoItemModel extends Entity<TProdutoItem> {
  crudModel: CrudModel;

  constructor(connections: TConnections) {
    super(connections, "produto_item");
    this.crudModel = new CrudModel(connections);
  }

  async produtoPlano({
    id,
    select,
  }: {
    id: Ids;
    select?: Select;
  }): Promise<TProdutoPlano> {
    let { produto_plano_id } = await this.read({
      id,
      select: ["produto_plano_id"],
    });
    if (produto_plano_id) {
      produto_plano_id = produto_plano_id?.trim();
      return this.crudModel.read({
        table: "produto_plano",
        id: { produto_plano_id },
        select,
      });
    }
    return [] as TProdutoPlano;
  }
}

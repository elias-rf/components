import { Ids, Select } from "@er/types";
import { TConnections } from "../../dal/connections";
import { Entity } from "../../lib/entity";
import { ProdutoPlanoModel } from "../produto-plano/produto-plano.model";
import { TProdutoPlano } from "../produto-plano/produto-plano.type";
import { TProdutoItem } from "./produto-item.type";

/**
 * produto_item.produto_item_id = tbl_Produto_Item.kProdutoItem
 * produto_item.produto_plano_id__produto_plano.produto_plano_id = tbl_Produto_Item.IdVisiontech__CadPro.CdProduto
 * produto_item.produto_id__produto.produto_id = tbl_Produto_Item.fkProduto__tbl_Produto.kProduto
 */

export class ProdutoItemModel extends Entity<TProdutoItem> {
  produtoPlanoModel: ProdutoPlanoModel;

  constructor(connections: TConnections) {
    super(connections, "produto_item");
    this.produtoPlanoModel = new ProdutoPlanoModel(connections);
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
      return this.produtoPlanoModel.read({ id: { produto_plano_id }, select });
    }
    return [] as TProdutoPlano;
  }
}

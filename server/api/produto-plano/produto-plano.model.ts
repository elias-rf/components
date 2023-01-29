import { TConnections } from "../../../types";
import { TProdutoPlanoRpc } from "../../../types/produto-plano.type";
import { crudModel } from "../crud/crud.model";

const table = "produto_plano";

/**
 * produto_item.produto_item_id = tbl_Produto_Item.kProdutoItem
 * produto_item.produto_plano_id__produto_plano.produto_plano_id = tbl_Produto_Item.IdVisiontech__CadPro.CdProduto
 * produto_item.produto_id__produto.produto_id = tbl_Produto_Item.fkProduto__tbl_Produto.kProduto
 */

export function produtoPlanoModel(connections: TConnections): TProdutoPlanoRpc {
  const crud = crudModel(connections);

  return {
    query: {
      async schema() {
        return crud.schema({ table });
      },
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },
    },
  };
}

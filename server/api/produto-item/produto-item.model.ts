import { TConnections } from "../../../types";
import { TProdutoItemRpc } from "../../../types/produto-item.type";
import { TProdutoPlano } from "../../../types/produto-plano.type";
import { crudModel } from "../crud/crud.model";
import { produtoPlanoModel } from "../produto-plano/produto-plano.model";

const table = "produto_item";

/**
 * produto_item.produto_item_id = tbl_Produto_Item.kProdutoItem
 * produto_item.produto_plano_id__produto_plano.produto_plano_id = tbl_Produto_Item.IdVisiontech__CadPro.CdProduto
 * produto_item.produto_id__produto.produto_id = tbl_Produto_Item.fkProduto__tbl_Produto.kProduto
 */

export function produtoItemModel(connections: TConnections): TProdutoItemRpc {
  const crud = crudModel(connections);
  const produtoPlano = produtoPlanoModel(connections);

  return {
    query: {
      async schema() {
        return crud.schema({ table });
      },
      async clear() {
        return crud.clear({ table });
      },
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },
      async plano({ id, select }) {
        let { produto_plano_id } = await crud.read({
          table: "produto_item",
          id,
          select: ["produto_plano_id"],
        });
        if (produto_plano_id) {
          produto_plano_id = produto_plano_id?.trim();
          return produtoPlano.query.read({
            id: { produto_plano_id },
            select,
          });
        }
        return [] as TProdutoPlano;
      },
    },
    mutation: {
      async del({ id }) {
        return crud.del({ table, id });
      },
      async create({ data }) {
        return crud.create({ table, data });
      },
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
    },
  };
}

import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { TIds, TSelect } from "@/types";
import { assertIds } from "@/utils/asserts/assert-ids";
import { CrudModel } from "@/utils/crud/crud-model";
import { produto_item } from "./produto-item.table";

export class ProdutoItemModel extends CrudModel {
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[produto_item.database], produto_item);
    this.models = models;
    models.produtoItem = this;
  }

  produtoPlano = async ({ ids, select }: { ids: TIds; select?: TSelect }) => {
    assertIds(ids, produto_item.fields);

    let { produto_plano_id } = await this.models.produtoItem.read({
      ids,
      select: ["produto_plano_id"],
    });

    if (produto_plano_id) {
      produto_plano_id = produto_plano_id?.trim();
      return this.models.produtoPlano.read({
        ids: [{ id: "produto_plano_id", value: produto_plano_id }],
        select,
      });
    }
    return [];
  };
}

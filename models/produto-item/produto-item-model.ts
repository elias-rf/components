import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { TId, TSelect } from "@/types";
import { assertId } from "@/utils/asserts/assert-id";
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

  produtoPlano = async ({ id, select }: { id: TId; select?: TSelect }) => {
    assertId(id, produto_item.fields);

    let { produto_plano_id } = await this.models.produtoItem.read({
      id,
      select: ["produto_plano_id"],
    });

    if (produto_plano_id) {
      produto_plano_id = produto_plano_id?.trim();
      return this.models.produtoPlano.read({
        id: { produto_plano_id: produto_plano_id },
        select,
      });
    }
    return [];
  };
}

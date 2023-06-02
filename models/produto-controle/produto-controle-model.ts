import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { produto_controle } from "./produto-controle.table";

export class ProdutoControleModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[produto_controle.database], produto_controle);
    models.produtoControle = this;
  }
}

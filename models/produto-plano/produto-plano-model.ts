import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { produto_plano } from "./produto-plano.table";

export class ProdutoPlanoModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[produto_plano.database], produto_plano);
    models.produtoPlano = this;
  }
}

import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { produto_estatistica } from "./produto-estatistica.table";

export class ProdutoEstatisticaModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[produto_estatistica.database], produto_estatistica);
    models.produtoEstatistica = this;
  }
}

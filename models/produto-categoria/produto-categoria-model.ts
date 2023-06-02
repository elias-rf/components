import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { produto_categoria } from "./produto-categoria.table";

export class ProdutoCategoriaModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[produto_categoria.database], produto_categoria);
    models.produtoCategoria = this;
  }
}

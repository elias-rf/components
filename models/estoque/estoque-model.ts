import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { estoque } from "./estoque.table";

export class EstoqueModel extends CrudModel {
  models: TModels;
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[estoque.database], estoque);
    this.models = models;
    models.estoque = this;
  }
}

import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { diamante } from "./diamante.table";

export class DiamanteModel extends CrudModel {
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[diamante.database], diamante);
    this.models = models;
    models.diamante = this;
  }
}

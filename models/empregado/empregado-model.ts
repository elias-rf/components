import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { empregado } from "./empregado.table";

export class EmpregadoModel extends CrudModel {
  models: TModels;
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[empregado.database], empregado);
    this.models = models;
    models.diamante = this;
  }
}

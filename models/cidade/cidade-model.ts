import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { cidade } from "./cidade.table";

export class CidadeModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[cidade.database], cidade);
    models.cidade = this;
  }
}

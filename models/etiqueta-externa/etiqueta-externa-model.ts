import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { etiqueta_externa } from "./etiqueta-externa.table";

export class EtiquetaExternaModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[etiqueta_externa.database], etiqueta_externa);
    models.etiquetaExterna = this;
  }
}

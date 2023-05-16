import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { etiqueta_interna } from "./etiqueta-interna.table";

export class EtiquetaInternaModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[etiqueta_interna.database], etiqueta_interna);
    models.etiquetaInterna = this;
  }
}

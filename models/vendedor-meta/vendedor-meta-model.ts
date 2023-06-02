import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { vendedor_meta } from "./vendedor-meta.table";

export class VendedorMetaModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[vendedor_meta.database], vendedor_meta);
    models.vendedorMeta = this;
  }
}

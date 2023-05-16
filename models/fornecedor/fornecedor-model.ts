import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { fornecedor } from "./fornecedor.table";

export class FornecedorModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[fornecedor.database], fornecedor);
    models.fornecedor = this;
  }
}

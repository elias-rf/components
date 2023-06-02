import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { nf_entrada_item } from "./nf-entrada-item.table";

export class NfEntradaItemModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[nf_entrada_item.database], nf_entrada_item);
    models.nfEntradaItem = this;
  }
}

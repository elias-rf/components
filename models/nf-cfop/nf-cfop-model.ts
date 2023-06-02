import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { nf_cfop } from "./nf-cfop.table";

export class NfCfopModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[nf_cfop.database], nf_cfop);
    models.nfCfop = this;
  }
}

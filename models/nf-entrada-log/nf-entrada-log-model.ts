import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { nf_entrada_log } from "./nf-entrada-log.table";

export class NfEntradaLogModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[nf_entrada_log.database], nf_entrada_log);
    models.nfEntradaLog = this;
  }
}

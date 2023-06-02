import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { nf_entrada_controle } from "./nf-entrada-controle.table";

export class NfEntradaControleModel extends CrudModel {
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[nf_entrada_controle.database], nf_entrada_controle);
    models.nfEntradaControle = this;
  }
}

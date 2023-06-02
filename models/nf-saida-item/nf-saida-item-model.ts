import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { Knex } from "knex";
import { nf_saida_item } from "./nf-saida-item.table";

export class NfSaidaItemModel extends CrudModel {
  connection: Knex;
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[nf_saida_item.database], nf_saida_item);
    this.connection = connections[nf_saida_item.database];
    this.models = models;
    models.nfSaidaItem = this;
  }
}

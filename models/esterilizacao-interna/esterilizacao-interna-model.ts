import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { Knex } from "knex";
import { esterilizacao_interna } from "./esterilizacao-interna.table";

export class EsterilizacaoInternaModel extends CrudModel {
  connection: Knex;
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[esterilizacao_interna.database], esterilizacao_interna);
    this.connection = connections[esterilizacao_interna.database];
    this.models = models;
    models.esterilizacaoInterna = this;
  }
}

import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { Knex } from "knex";
import { operacao_producao } from "./operacao-producao.table";

export class OperacaoProducaoModel extends CrudModel {
  connection: Knex;
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[operacao_producao.database], operacao_producao);
    this.connection = connections[operacao_producao.database];
    this.models = models;
    models.operacaoProducao = this;
  }
}

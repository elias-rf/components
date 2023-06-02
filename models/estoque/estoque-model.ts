import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import { CrudModel } from "@/utils/crud/crud-model";
import { estoque } from "./estoque.table";

export class EstoqueModel extends CrudModel {
  models: TModels;
  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[estoque.database], estoque);
    this.models = models;
    models.estoque = this;
  }

  // async increment({ id, quantidade }: { id: TId; quantidade: number }) {
  //   assertAny(isNumber(quantidade), "quantidade dever ser numérica");
  //   assertId(id, estoque.fields);

  //   const qry = await this.connection(estoque.table)
  //     .increment("EstAtual", quantidade)
  //     .where(knexId(id, estoque.fields))
  //     .returning(["EstAtual"]);
  //   return { estoque_atual: qry[0].EstAtual };
  // }
}

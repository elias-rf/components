import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class OrdemProducaoAux extends ModelBase {
  static tableName = "ordemProducaoAux";
  static idColumn = ["fkOp"];

  fkOp!: number;
  qtdTotal!: number;
  qtdEmProcesso!: number;
  qtdRejeitos!: number;
  

  static getFields() {
    return [
      "fkOp",
      "qtdTotal",
      "qtdEmProcesso",
      "qtdRejeitos",
      ];
  }
}

OrdemProducaoAux.knex(connections.oftalmo);

export type TOrdemProducaoAux = ModelObject<OrdemProducaoAux>;

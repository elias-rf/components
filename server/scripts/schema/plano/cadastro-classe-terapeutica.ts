import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadastroClasseTerapeutica extends ModelBase {
  static tableName = "CadastroClasseTerapeutica";
  static idColumn = [];

  CdClasseTerapeutica!: string;
  NmClasseTerapeutica!: string;
  DtUltAlteracao!: Date;
  Observacao!: string;
  Tipo!: number;
  

  static getFields() {
    return [
      "CdClasseTerapeutica",
      "NmClasseTerapeutica",
      "DtUltAlteracao",
      "Observacao",
      "Tipo",
      ];
  }
}

CadastroClasseTerapeutica.knex(connections.plano);

export type TCadastroClasseTerapeutica = ModelObject<CadastroClasseTerapeutica>;

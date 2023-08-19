import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Exames extends ModelBase {
  static tableName = "Exames";
  static idColumn = ["CdExame"];

  CdExame!: string;
  Descricao!: string;
  Unidade!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdExame",
      "Descricao",
      "Unidade",
      "DtUltAlteracao",
      ];
  }
}

Exames.knex(connections.plano);

export type TExames = ModelObject<Exames>;

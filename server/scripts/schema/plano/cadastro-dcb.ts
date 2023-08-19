import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadastroDcb extends ModelBase {
  static tableName = "CadastroDCB";
  static idColumn = ["CdDCB"];

  CdDCB!: string;
  DescricaoDCB!: string;
  Observacao!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdDCB",
      "DescricaoDCB",
      "Observacao",
      "DtUltAlteracao",
      ];
  }
}

CadastroDcb.knex(connections.plano);

export type TCadastroDcb = ModelObject<CadastroDcb>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreReq extends ModelBase {
  static tableName = "MestreReq";
  static idColumn = [];

  CdFilial!: number;
  NumRequisicao!: number;
  DtEmissao!: Date;
  CdTecnico!: number;
  NumeroRat!: number;
  Situacao!: string;
  FgEstoque!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumRequisicao",
      "DtEmissao",
      "CdTecnico",
      "NumeroRat",
      "Situacao",
      "FgEstoque",
      ];
  }
}

MestreReq.knex(connections.plano);

export type TMestreReq = ModelObject<MestreReq>;

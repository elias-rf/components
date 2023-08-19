import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class LancDiversosClasse extends ModelBase {
  static tableName = "LancDiversosClasse";
  static idColumn = [];

  CdEmpresa!: number;
  CdBanco!: number;
  CdAgencia!: string;
  NumConta!: string;
  DtBase!: Date;
  NumLcto!: number;
  NumContaClasse!: number;
  Percentual!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdBanco",
      "CdAgencia",
      "NumConta",
      "DtBase",
      "NumLcto",
      "NumContaClasse",
      "Percentual",
      ];
  }
}

LancDiversosClasse.knex(connections.plano);

export type TLancDiversosClasse = ModelObject<LancDiversosClasse>;

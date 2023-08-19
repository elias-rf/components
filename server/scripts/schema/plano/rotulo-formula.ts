import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RotuloFormula extends ModelBase {
  static tableName = "RotuloFormula";
  static idColumn = [];

  CdFilial!: number;
  NumFormula!: number;
  NmCliente!: string;
  NmMedico!: string;
  CdRotulo!: number;
  DescricaoRotulo!: string;
  FgImpressao!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumFormula",
      "NmCliente",
      "NmMedico",
      "CdRotulo",
      "DescricaoRotulo",
      "FgImpressao",
      ];
  }
}

RotuloFormula.knex(connections.plano);

export type TRotuloFormula = ModelObject<RotuloFormula>;

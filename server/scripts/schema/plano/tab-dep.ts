import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabDep extends ModelBase {
  static tableName = "TabDep";
  static idColumn = ["CdDepartamento"];

  CdDepartamento!: number;
  NmDepartamento!: string;
  PercLucro!: number;
  FgEstoque!: string;
  FgListaPreco!: string;
  DtUltAlteracao!: Date;
  PercDescMaxGerente!: number;
  PercDescMaxVendedor!: number;
  PontosMilhagem!: number;
  SeqGrade!: number;
  

  static getFields() {
    return [
      "CdDepartamento",
      "NmDepartamento",
      "PercLucro",
      "FgEstoque",
      "FgListaPreco",
      "DtUltAlteracao",
      "PercDescMaxGerente",
      "PercDescMaxVendedor",
      "PontosMilhagem",
      "SeqGrade",
      ];
  }
}

TabDep.knex(connections.plano);

export type TTabDep = ModelObject<TabDep>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CategPro extends ModelBase {
  static tableName = "CategPro";
  static idColumn = ["CdCategoria"];

  CdCategoria!: string;
  NmCategoria!: string;
  CdDepartamento!: number;
  FgListaPreco!: string;
  DtUltAlteracao!: Date;
  Mensagem!: string;
  PercDescMaxGerente!: number;
  PercDescMaxVendedor!: number;
  

  static getFields() {
    return [
      "CdCategoria",
      "NmCategoria",
      "CdDepartamento",
      "FgListaPreco",
      "DtUltAlteracao",
      "Mensagem",
      "PercDescMaxGerente",
      "PercDescMaxVendedor",
      ];
  }
}

CategPro.knex(connections.plano);

export type TCategPro = ModelObject<CategPro>;

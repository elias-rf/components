import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProEtiqueta extends ModelBase {
  static tableName = "CadProEtiqueta";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  ReceitaEtiqueta!: number;
  TipoEtiqueta!: number;
  TipoValidadeEtiqueta!: string;
  ValidadeEtiqueta!: number;
  DeptoEtiqueta!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdProduto",
      "ReceitaEtiqueta",
      "TipoEtiqueta",
      "TipoValidadeEtiqueta",
      "ValidadeEtiqueta",
      "DeptoEtiqueta",
      "DtUltAlteracao",
      ];
  }
}

CadProEtiqueta.knex(connections.plano);

export type TCadProEtiqueta = ModelObject<CadProEtiqueta>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosTipoDocumento extends ModelBase {
  static tableName = "ParametrosTipoDocumento";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  TipoDocumento!: string;
  PercMulta!: number;
  PercJurosDia!: number;
  DtUltAlteracao!: Date;
  FgCobrancaBancaria!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "TipoDocumento",
      "PercMulta",
      "PercJurosDia",
      "DtUltAlteracao",
      "FgCobrancaBancaria",
      ];
  }
}

ParametrosTipoDocumento.knex(connections.plano);

export type TParametrosTipoDocumento = ModelObject<ParametrosTipoDocumento>;

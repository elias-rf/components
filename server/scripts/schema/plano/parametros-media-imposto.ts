import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosMediaImposto extends ModelBase {
  static tableName = "ParametrosMediaImposto";
  static idColumn = [];

  TipoTabela!: number;
  CodigoNCMNBS!: number;
  CodigoEX!: string;
  UF!: string;
  PercFederalNacional!: number;
  PercFederalImportado!: number;
  PercEstadual!: number;
  PercMunicipal!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "TipoTabela",
      "CodigoNCMNBS",
      "CodigoEX",
      "UF",
      "PercFederalNacional",
      "PercFederalImportado",
      "PercEstadual",
      "PercMunicipal",
      "DtUltAlteracao",
      ];
  }
}

ParametrosMediaImposto.knex(connections.plano);

export type TParametrosMediaImposto = ModelObject<ParametrosMediaImposto>;

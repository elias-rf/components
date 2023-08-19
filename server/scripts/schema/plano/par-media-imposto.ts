import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParMediaImposto extends ModelBase {
  static tableName = "ParMediaImposto";
  static idColumn = [];

  CodigoNCMNBS!: number;
  CodigoEX!: string;
  TipoTabela!: number;
  AliquotaNacional!: number;
  AliquotaImportado!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CodigoNCMNBS",
      "CodigoEX",
      "TipoTabela",
      "AliquotaNacional",
      "AliquotaImportado",
      "DtUltAlteracao",
      ];
  }
}

ParMediaImposto.knex(connections.plano);

export type TParMediaImposto = ModelObject<ParMediaImposto>;

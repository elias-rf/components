import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Controle15 extends ModelBase {
  static tableName = "Controle15";
  static idColumn = [];

  NumSerie!: string;
  MFAdicional!: string;
  TipoECF!: string;
  MarcaECF!: string;
  ModeloECF!: string;
  DtEstoque!: Date;
  HrEstoque!: Date;
  

  static getFields() {
    return [
      "NumSerie",
      "MFAdicional",
      "TipoECF",
      "MarcaECF",
      "ModeloECF",
      "DtEstoque",
      "HrEstoque",
      ];
  }
}

Controle15.knex(connections.plano);

export type TControle15 = ModelObject<Controle15>;

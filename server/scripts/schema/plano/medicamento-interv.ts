import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MedicamentoInterv extends ModelBase {
  static tableName = "MedicamentoInterv";
  static idColumn = [];

  CdIntervencao!: number;
  CdCliente!: number;
  CdProduto!: string;
  DtInicio!: Date;
  DtFim!: Date;
  DtUltAlteracao!: Date;
  Posologia!: string;
  

  static getFields() {
    return [
      "CdIntervencao",
      "CdCliente",
      "CdProduto",
      "DtInicio",
      "DtFim",
      "DtUltAlteracao",
      "Posologia",
      ];
  }
}

MedicamentoInterv.knex(connections.plano);

export type TMedicamentoInterv = ModelObject<MedicamentoInterv>;

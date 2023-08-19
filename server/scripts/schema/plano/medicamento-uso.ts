import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MedicamentoUso extends ModelBase {
  static tableName = "MedicamentoUso";
  static idColumn = [];

  CdProduto!: string;
  CdCliente!: string;
  DtInicio!: Date;
  DtFim!: Date;
  DtUltAlteracao!: Date;
  Posologia!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "CdCliente",
      "DtInicio",
      "DtFim",
      "DtUltAlteracao",
      "Posologia",
      ];
  }
}

MedicamentoUso.knex(connections.plano);

export type TMedicamentoUso = ModelObject<MedicamentoUso>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class RomaneioEstoqueHistorico extends ModelBase {
  static tableName = "RomaneioEstoqueHistorico";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumRomaneio!: number;
  Data!: Date;
  Usuario!: string;
  Historico!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumRomaneio",
      "Data",
      "Usuario",
      "Historico",
      ];
  }
}

RomaneioEstoqueHistorico.knex(connections.plano);

export type TRomaneioEstoqueHistorico = ModelObject<RomaneioEstoqueHistorico>;

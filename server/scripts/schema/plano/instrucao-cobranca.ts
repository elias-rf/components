import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class InstrucaoCobranca extends ModelBase {
  static tableName = "InstrucaoCobranca";
  static idColumn = [];

  CdBanco!: number;
  CdInstrucaoCob!: number;
  DsInstrucaoCob!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "CdInstrucaoCob",
      "DsInstrucaoCob",
      ];
  }
}

InstrucaoCobranca.knex(connections.plano);

export type TInstrucaoCobranca = ModelObject<InstrucaoCobranca>;

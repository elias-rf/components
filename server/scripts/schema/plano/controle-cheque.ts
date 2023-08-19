import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ControleCheque extends ModelBase {
  static tableName = "ControleCheque";
  static idColumn = ["CdControleCheque"];

  CdControleCheque!: number;
  CdCliente!: number;
  CdFornecedor!: number;
  CdBanco!: number;
  CdAgencia!: number;
  NrConta!: string;
  NrCheque!: string;
  NmEmitente!: string;
  Valor!: number;
  CdStatus!: string;
  Data!: Date;
  Numdoc!: number;
  SeqDoc!: number;
  

  static getFields() {
    return [
      "CdControleCheque",
      "CdCliente",
      "CdFornecedor",
      "CdBanco",
      "CdAgencia",
      "NrConta",
      "NrCheque",
      "NmEmitente",
      "Valor",
      "CdStatus",
      "Data",
      "Numdoc",
      "SeqDoc",
      ];
  }
}

ControleCheque.knex(connections.plano);

export type TControleCheque = ModelObject<ControleCheque>;

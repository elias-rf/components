import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AcumuladoresManipulacao extends ModelBase {
  static tableName = "AcumuladoresManipulacao";
  static idColumn = [];

  CdAcumuladorParcial!: number;
  Descricao!: string;
  Validade!: number;
  Unidade!: string;
  FgQuantidade!: string;
  FgFecharQSP!: string;
  FgConversao!: string;
  FgSemVolume!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdAcumuladorParcial",
      "Descricao",
      "Validade",
      "Unidade",
      "FgQuantidade",
      "FgFecharQSP",
      "FgConversao",
      "FgSemVolume",
      "DtUltAlteracao",
      ];
  }
}

AcumuladoresManipulacao.knex(connections.plano);

export type TAcumuladoresManipulacao = ModelObject<AcumuladoresManipulacao>;

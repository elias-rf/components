import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabelaAuxiliar extends ModelBase {
  static tableName = "TabelaAuxiliar";
  static idColumn = [];

  Tipo!: string;
  Codigo!: bigint;
  Descricao!: string;
  FgAtivo!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "Tipo",
      "Codigo",
      "Descricao",
      "FgAtivo",
      "DtUltAlteracao",
      ];
  }
}

TabelaAuxiliar.knex(connections.plano);

export type TTabelaAuxiliar = ModelObject<TabelaAuxiliar>;

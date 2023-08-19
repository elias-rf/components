import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ArqDupDespesas extends ModelBase {
  static tableName = "ArqDupDespesas";
  static idColumn = [];

  CdFilial!: number;
  CdFornecedor!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  SeqDoc!: number;
  NumContaDespesa!: number;
  Percentual!: number;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "CdFornecedor",
      "NumDoc",
      "Serie",
      "Modelo",
      "SeqDoc",
      "NumContaDespesa",
      "Percentual",
      "DtUltAlteracao",
      ];
  }
}

ArqDupDespesas.knex(connections.plano);

export type TArqDupDespesas = ModelObject<ArqDupDespesas>;

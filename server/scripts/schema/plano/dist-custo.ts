import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class DistCusto extends ModelBase {
  static tableName = "DistCusto";
  static idColumn = [];

  CdEmpresa!: number;
  NumDoc!: number;
  Serie!: string;
  Modelo!: string;
  SeqDoc!: number;
  CdEmitente!: number;
  CdCentroCusto!: number;
  Percentual!: number;
  DtUltAlteracao!: Date;
  NumNota!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "NumDoc",
      "Serie",
      "Modelo",
      "SeqDoc",
      "CdEmitente",
      "CdCentroCusto",
      "Percentual",
      "DtUltAlteracao",
      "NumNota",
      ];
  }
}

DistCusto.knex(connections.plano);

export type TDistCusto = ModelObject<DistCusto>;

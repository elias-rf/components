import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLoopTamboreamento extends ModelBase {
  static tableName = "tbl_OP_Loop_Tamboreamento";
  static idColumn = ["kOpLoopTamboreamento"];

  kOpLoopTamboreamento!: number;
  fkOpLoop!: string;
  DataHoraInicial!: Date;
  DataHoraFinal!: Date;
  Tempo!: number;
  fkFuncionario!: number;
  DataTamboreamento!: Date;
  

  static getFields() {
    return [
      "kOpLoopTamboreamento",
      "fkOpLoop",
      "DataHoraInicial",
      "DataHoraFinal",
      "Tempo",
      "fkFuncionario",
      "DataTamboreamento",
      ];
  }
}

TblOpLoopTamboreamento.knex(connections.oftalmo);

export type TTblOpLoopTamboreamento = ModelObject<TblOpLoopTamboreamento>;

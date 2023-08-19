import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLoop extends ModelBase {
  static tableName = "tbl_OP_Loop";
  static idColumn = ["kOpLoop"];

  kOpLoop!: string;
  QtdFilamentos!: number;
  Espessura!: number;
  Modelo!: string;
  Tamanho!: number;
  Lote!: string;
  DataEmissao!: Date;
  Travado!: number;
  IdAuxiliar!: number;
  

  static getFields() {
    return [
      "kOpLoop",
      "QtdFilamentos",
      "Espessura",
      "Modelo",
      "Tamanho",
      "Lote",
      "DataEmissao",
      "Travado",
      "IdAuxiliar",
      ];
  }
}

TblOpLoop.knex(connections.oftalmo);

export type TTblOpLoop = ModelObject<TblOpLoop>;

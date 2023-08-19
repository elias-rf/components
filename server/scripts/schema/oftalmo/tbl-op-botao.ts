import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpBotao extends ModelBase {
  static tableName = "tbl_OP_Botao";
  static idColumn = ["kOPBotao"];

  kOPBotao!: string;
  Lote!: string;
  NomeUsuario!: string;
  DataEmissao!: Date;
  Regulador!: string;
  DataRegulagem!: Date;
  Travado!: number;
  IdAuxiliar!: number;
  

  static getFields() {
    return [
      "kOPBotao",
      "Lote",
      "NomeUsuario",
      "DataEmissao",
      "Regulador",
      "DataRegulagem",
      "Travado",
      "IdAuxiliar",
      ];
  }
}

TblOpBotao.knex(connections.oftalmo);

export type TTblOpBotao = ModelObject<TblOpBotao>;

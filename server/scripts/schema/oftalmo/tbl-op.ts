import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOp extends ModelBase {
  static tableName = "tbl_OP";
  static idColumn = ["kOP"];

  kOP!: number;
  fkOPBotao!: number;
  fkOPLoop!: number;
  fkOPPai!: number;
  fkTipoOP!: number;
  DataEmissao!: Date;
  Quantidade!: number;
  EmProcesso!: number;
  Travado!: number;
  NomeUsuario!: string;
  Obs!: string;
  fkProdutoItem!: number;
  Broca!: number;
  

  static getFields() {
    return [
      "kOP",
      "fkOPBotao",
      "fkOPLoop",
      "fkOPPai",
      "fkTipoOP",
      "DataEmissao",
      "Quantidade",
      "EmProcesso",
      "Travado",
      "NomeUsuario",
      "Obs",
      "fkProdutoItem",
      "Broca",
      ];
  }
}

TblOp.knex(connections.oftalmo);

export type TTblOp = ModelObject<TblOp>;

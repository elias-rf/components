import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLio extends ModelBase {
  static tableName = "tbl_OP_LIO";
  static idColumn = ["kOpLIO"];

  kOpLIO!: number;
  fkOpBotao!: string;
  kVia!: number;
  fkOpLoop!: string;
  NomeUsuario!: string;
  DataEmissao!: Date;
  Obs!: string;
  Quantidade!: number;
  fkOperacaoProcesso!: number;
  QtdProcesso!: number;
  fkprodutoitem!: number;
  Profundidade!: number;
  Broca!: number;
  Travado!: number;
  

  static getFields() {
    return [
      "kOpLIO",
      "fkOpBotao",
      "kVia",
      "fkOpLoop",
      "NomeUsuario",
      "DataEmissao",
      "Obs",
      "Quantidade",
      "fkOperacaoProcesso",
      "QtdProcesso",
      "fkprodutoitem",
      "Profundidade",
      "Broca",
      "Travado",
      ];
  }
}

TblOpLio.knex(connections.oftalmo);

export type TTblOpLio = ModelObject<TblOpLio>;

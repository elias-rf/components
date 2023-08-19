import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblOpLiopu extends ModelBase {
  static tableName = "tbl_OP_LIOPU";
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
  fkProdutoItem!: number;
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
      "fkProdutoItem",
      "Profundidade",
      "Broca",
      "Travado",
      ];
  }
}

TblOpLiopu.knex(connections.oftalmo);

export type TTblOpLiopu = ModelObject<TblOpLiopu>;

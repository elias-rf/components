import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CotacaoDescontoEspecial extends ModelBase {
  static tableName = "CotacaoDescontoEspecial";
  static idColumn = [];

  CdFornecedor!: number;
  CdProduto!: string;
  Nivel1!: number;
  Nivel2!: number;
  Nivel3!: number;
  DtValidade!: Date;
  

  static getFields() {
    return [
      "CdFornecedor",
      "CdProduto",
      "Nivel1",
      "Nivel2",
      "Nivel3",
      "DtValidade",
      ];
  }
}

CotacaoDescontoEspecial.knex(connections.plano);

export type TCotacaoDescontoEspecial = ModelObject<CotacaoDescontoEspecial>;

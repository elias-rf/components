import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProDescPgto extends ModelBase {
  static tableName = "CadProDescPgto";
  static idColumn = [];

  CdProduto!: string;
  PrazoMedio!: number;
  DescVendedor!: number;
  DescGerente!: number;
  DescVendedorConsFinal!: number;
  DescGerenteConsFinal!: number;
  

  static getFields() {
    return [
      "CdProduto",
      "PrazoMedio",
      "DescVendedor",
      "DescGerente",
      "DescVendedorConsFinal",
      "DescGerenteConsFinal",
      ];
  }
}

CadProDescPgto.knex(connections.plano);

export type TCadProDescPgto = ModelObject<CadProDescPgto>;

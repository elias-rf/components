import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadProProcProdutivo extends ModelBase {
  static tableName = "CadProProcProdutivo";
  static idColumn = [];

  CdProduto!: string;
  CdPostoProdutivo!: number;
  Ordem!: number;
  DescricaoOperacao!: string;
  DescricaoFerramental!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "CdPostoProdutivo",
      "Ordem",
      "DescricaoOperacao",
      "DescricaoFerramental",
      ];
  }
}

CadProProcProdutivo.knex(connections.plano);

export type TCadProProcProdutivo = ModelObject<CadProProcProdutivo>;

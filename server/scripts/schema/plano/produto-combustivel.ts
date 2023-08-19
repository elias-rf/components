import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProdutoCombustivel extends ModelBase {
  static tableName = "ProdutoCombustivel";
  static idColumn = ["CdProduto"];

  CdProduto!: string;
  CdANP!: string;
  CdCODIF!: string;
  DtUltAlteracao!: Date;
  PercGasNatural!: number;
  PercGasNaturalNac!: number;
  PercGasNaturalImp!: number;
  VlPartida!: number;
  DescricaoANP!: string;
  

  static getFields() {
    return [
      "CdProduto",
      "CdANP",
      "CdCODIF",
      "DtUltAlteracao",
      "PercGasNatural",
      "PercGasNaturalNac",
      "PercGasNaturalImp",
      "VlPartida",
      "DescricaoANP",
      ];
  }
}

ProdutoCombustivel.knex(connections.plano);

export type TProdutoCombustivel = ModelObject<ProdutoCombustivel>;

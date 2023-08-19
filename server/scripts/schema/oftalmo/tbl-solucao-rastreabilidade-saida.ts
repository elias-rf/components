import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblSolucaoRastreabilidadeSaida extends ModelBase {
  static tableName = "tbl_Solucao_Rastreabilidade_Saida";
  static idColumn = ["kRastreabilidade"];

  kRastreabilidade!: number;
  fkSaida!: number;
  fkProdutoItem!: number;
  Lote!: string;
  Quantidade!: number;
  

  static getFields() {
    return [
      "kRastreabilidade",
      "fkSaida",
      "fkProdutoItem",
      "Lote",
      "Quantidade",
      ];
  }
}

TblSolucaoRastreabilidadeSaida.knex(connections.oftalmo);

export type TTblSolucaoRastreabilidadeSaida = ModelObject<TblSolucaoRastreabilidadeSaida>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProdutoItem extends ModelBase {
  static tableName = "tbl_Produto_Item";
  static idColumn = ["kProdutoItem"];

  kProdutoItem!: number;
  NomeProdutoItem!: string;
  fkProduto!: number;
  QtdMinima!: number;
  QtdAtual!: number;
  QtdMaxima!: number;
  QtdSeguranca!: number;
  ConsumoMedioMes!: number;
  ValorVenda!: number;
  ValorVendaDolar!: number;
  ValorCompra!: number;
  fkMoedaCompra!: number;
  IdVisiontech!: string;
  ForaDeLinha!: number;
  GrupoCredito!: string;
  fkProdutoItemAssociado!: number;
  AvisoEstoqueMinMax!: number;
  

  static getFields() {
    return [
      "kProdutoItem",
      "NomeProdutoItem",
      "fkProduto",
      "QtdMinima",
      "QtdAtual",
      "QtdMaxima",
      "QtdSeguranca",
      "ConsumoMedioMes",
      "ValorVenda",
      "ValorVendaDolar",
      "ValorCompra",
      "fkMoedaCompra",
      "IdVisiontech",
      "ForaDeLinha",
      "GrupoCredito",
      "fkProdutoItemAssociado",
      "AvisoEstoqueMinMax",
      ];
  }
}

TblProdutoItem.knex(connections.oftalmo);

export type TTblProdutoItem = ModelObject<TblProdutoItem>;
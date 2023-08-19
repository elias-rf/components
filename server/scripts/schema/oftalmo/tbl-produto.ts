import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TblProduto extends ModelBase {
  static tableName = "tbl_Produto";
  static idColumn = ["kProduto"];

  kProduto!: number;
  fkCategoria!: string;
  NomeComercial!: string;
  NomeInternacional!: string;
  BarCode!: number;
  Fabricante!: string;
  OBS!: string;
  DescricaoTecnica!: string;
  DescricaoGenerica!: string;
  CST!: number;
  Unidade!: string;
  GrupoCredito!: string;
  PesoBruto!: number;
  VlrMin!: number;
  Moeda!: number;
  NBM!: string;
  FOB!: number;
  Qtd!: number;
  Diametro!: string;
  DiametroTotal!: string;
  Furo!: number;
  Separacao!: number;
  PrazoAquisicao!: number;
  fkNCM!: number;
  fkUnidade!: number;
  ForaDeLinha!: number;
  Auditoria!: number;
  ItemEstoque!: number;
  fkLinhaDeProducao!: number;
  EsterilizacaoETO!: number;
  IsCatalogo!: number;
  ValorCusto!: number;
  TaxaIPI!: number;
  PRO_Ferrara!: number;
  fkSubCategoria!: number;
  CategoriaPREVISA!: string;
  OrigemCST!: number;
  

  static getFields() {
    return [
      "kProduto",
      "fkCategoria",
      "NomeComercial",
      "NomeInternacional",
      "BarCode",
      "Fabricante",
      "OBS",
      "DescricaoTecnica",
      "DescricaoGenerica",
      "CST",
      "Unidade",
      "GrupoCredito",
      "PesoBruto",
      "VlrMin",
      "Moeda",
      "NBM",
      "FOB",
      "Qtd",
      "Diametro",
      "DiametroTotal",
      "Furo",
      "Separacao",
      "PrazoAquisicao",
      "fkNCM",
      "fkUnidade",
      "ForaDeLinha",
      "Auditoria",
      "ItemEstoque",
      "fkLinhaDeProducao",
      "EsterilizacaoETO",
      "IsCatalogo",
      "ValorCusto",
      "TaxaIPI",
      "PRO_Ferrara",
      "fkSubCategoria",
      "CategoriaPREVISA",
      "OrigemCST",
      ];
  }
}

TblProduto.knex(connections.oftalmo);

export type TTblProduto = ModelObject<TblProduto>;

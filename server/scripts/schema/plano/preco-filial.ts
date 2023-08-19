import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PrecoFilial extends ModelBase {
  static tableName = "PrecoFilial";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  DtFinalPromAtacado!: Date;
  DtFinalPromVarejo!: Date;
  DtInicialPromAtacado!: Date;
  DtInicialPromVarejo!: Date;
  DtUltAlteracao!: Date;
  VlAtacado!: number;
  VlPromAtacado!: number;
  VlPromVarejo!: number;
  VlVenda!: number;
  VlTabela!: number;
  VlVendaAnterior!: number;
  VlAtacadoAnterior!: number;
  DtUltAlteracaoVlTabela!: Date;
  VlCusto!: number;
  DtUltAlteracaoVlCusto!: Date;
  DtUltAlteracaoVlVenda!: Date;
  DtUltAlteracaoVlAtacado!: Date;
  PercDescontoA!: number;
  PercDescontoB!: number;
  PercDescontoC!: number;
  PercDescontoD!: number;
  PercDescontoE!: number;
  PercDescontoFidelizacao!: number;
  PercDescontoFidelidade!: number;
  PercDescMaxVendedor!: number;
  PercDescExtra!: number;
  PercAcresFinanc!: number;
  PercDescMaxGerente!: number;
  PercDescontoEspecial!: number;
  PercDescVista!: number;
  PercDescPrazo!: number;
  FgDescVendedorDireto!: string;
  FgPrecoFabrica!: string;
  DescontoF!: number;
  DescontoG!: number;
  DescontoH!: number;
  DescontoI!: number;
  DescontoJ!: number;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "DtFinalPromAtacado",
      "DtFinalPromVarejo",
      "DtInicialPromAtacado",
      "DtInicialPromVarejo",
      "DtUltAlteracao",
      "VlAtacado",
      "VlPromAtacado",
      "VlPromVarejo",
      "VlVenda",
      "VlTabela",
      "VlVendaAnterior",
      "VlAtacadoAnterior",
      "DtUltAlteracaoVlTabela",
      "VlCusto",
      "DtUltAlteracaoVlCusto",
      "DtUltAlteracaoVlVenda",
      "DtUltAlteracaoVlAtacado",
      "PercDescontoA",
      "PercDescontoB",
      "PercDescontoC",
      "PercDescontoD",
      "PercDescontoE",
      "PercDescontoFidelizacao",
      "PercDescontoFidelidade",
      "PercDescMaxVendedor",
      "PercDescExtra",
      "PercAcresFinanc",
      "PercDescMaxGerente",
      "PercDescontoEspecial",
      "PercDescVista",
      "PercDescPrazo",
      "FgDescVendedorDireto",
      "FgPrecoFabrica",
      "DescontoF",
      "DescontoG",
      "DescontoH",
      "DescontoI",
      "DescontoJ",
      ];
  }
}

PrecoFilial.knex(connections.plano);

export type TPrecoFilial = ModelObject<PrecoFilial>;

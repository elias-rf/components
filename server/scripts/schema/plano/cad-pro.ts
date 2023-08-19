import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class CadPro extends ModelBase {
  static tableName = "CadPro";
  static idColumn = ["CdProduto"];

  AcresFinanc!: number;
  AliqIrrf!: number;
  CkTabela!: string;
  Correcao!: number;
  CustoContabil!: number;
  CustoEmb!: number;
  CustoFinanc!: number;
  CustoFrete!: number;
  Desc1!: number;
  Desc2!: number;
  Desc3!: number;
  Desc4!: number;
  Desc5!: number;
  Desc6!: number;
  DescontoSubstituicao!: number;
  DifICMS!: number;
  DtUltPedido!: Date;
  DtUltVenda!: Date;
  FgComposto!: string;
  FgControlaSerie!: string;
  FgEtiquetaBalanca!: string;
  Fragmentada!: string;
  MedidaNovo!: string;
  MestreGrade!: string;
  ObsComplementar!: string;
  PercAumentoFab!: number;
  PercComissaoPrazo!: number;
  PercComissaoVista!: number;
  PercFrete!: number;
  PercIpiFab!: number;
  PesoBruto!: number;
  PesoLiq!: number;
  Pis_Cofins!: number;
  PrecoAtacadoAnt!: number;
  PrecoVendaAnt!: number;
  QtdadeUltCompra!: number;
  ReceitaEtiqueta!: number;
  Servico!: string;
  TipoEtiqueta!: number;
  TipoValidadeEtiqueta!: string;
  TotVendaMes!: number;
  UltCusto!: number;
  ValidadeEtiqueta!: number;
  VlTabela!: number;
  ConversaoMedida!: number;
  Classificacao!: string;
  DtFinalPromAtacado!: Date;
  DtFinalPromVarejo!: Date;
  DtInicialPromAtacado!: Date;
  DtInicialPromVarejo!: Date;
  DtUltAlteracao!: Date;
  FgKit!: string;
  ImprimeComponentes!: string;
  MargemSubstituicao!: number;
  TipoTributacao!: string;
  VlAtacado!: number;
  VlPromocaoAtacado!: number;
  VlPromocaoVarejo!: number;
  CdInterno!: string;
  CdRefEstoque!: string;
  CdReferencia!: string;
  DescontoA!: number;
  DescontoB!: number;
  DescontoC!: number;
  DescontoD!: number;
  DescontoE!: number;
  DescontoFidelidade!: number;
  Observacao!: string;
  CdProduto!: string;
  CdDepartamento!: number;
  CdFornecedor!: number;
  DtCadastro!: Date;
  VlCusto!: number;
  VlVenda!: number;
  VlVendaAnt!: number;
  FgAtivo!: string;
  FgEstoque!: string;
  SitBal!: string;
  PercLucro!: number;
  DtPromocao!: Date;
  CdCategoria!: string;
  Fracionamento!: number;
  NomeDoSal!: string;
  FgPsico!: string;
  CdDCB!: string;
  CdFabricante!: number;
  Area!: number;
  Espessura!: number;
  Largura!: number;
  Comprimento!: number;
  CdGrupo!: number;
  CdSubGrupo!: number;
  DptoEtiqueta!: number;
  Classificacao10147!: string;
  FgMoedaEspecifica!: string;
  FgLoteControlado!: string;
  FgBancoHoras!: string;
  FgManipulado!: string;
  FgPrecoTabelado!: string;
  DescricaoDCB!: string;
  UnidadePesagem!: string;
  FgEmbalagem!: string;
  Capacidade!: number;
  FgDescVendedorDireto!: string;
  PercDescMaxGerente!: number;
  PercDescMaxVendedor!: number;
  FgComplementoVenda!: string;
  CdMarca!: number;
  FgPercLimite!: string;
  DescMaxPermitido!: number;
  CdProdutoNumerico!: number;
  DtUltCompra!: Date;
  VlUltCompra!: number;
  PoliticaPreco!: string;
  PercRedCusto!: number;
  FgQtdeFixa!: string;
  CustoAlternativo!: number;
  Cdmoeda!: string;
  Equivalencia!: number;
  FgProdFinal!: string;
  VlManipulacao!: number;
  FgQsp!: string;
  MedidaAdicional!: number;
  VlAdicional!: number;
  MedidaPadrao!: number;
  Descricao!: string;
  Complemento!: string;
  FgPrecoFabrica!: string;
  CriterioReposicao!: string;
  PercDescVista!: number;
  PercDescPrazo!: number;
  MultiplicadorManipulacao!: number;
  VlUltCusto!: number;
  DtUltAlteracaoVlTabela!: Date;
  DtUltAlteracaoVlCusto!: Date;
  DtUltAlteracaoVlVenda!: Date;
  DtUltAlteracaoVlAtacado!: Date;
  TipoReposicao!: string;
  UnidadeProdutiva!: string;
  CdClasseTerapeutica!: string;
  DescontoEspecial!: number;
  PercDescExtra!: number;
  PontosMilhagem!: number;
  CdMoedaCustoMedio!: string;
  Abreviatura!: string;
  DoseMinima!: number;
  DoseMaxima!: number;
  FgCapsula!: string;
  CdSal!: number;
  PontosMilhagemDebito!: number;
  FgRegistro74!: string;
  PercMaximo!: number;
  FgVMSCard!: string;
  DescontoFidelizacao!: number;
  FgUsoContinuo!: string;
  PosologiaDia!: number;
  Unidade!: string;
  TipoReceita!: string;
  NumUltLote!: number;
  FgBloqueioCompra!: string;
  CodiGONCM!: string;
  FgCompraCentralizada!: string;
  PercComissaoVarejoVista!: number;
  PercComissaoAtacadoVista!: number;
  PercComissaoVarejoPrazo!: number;
  PercComissaoAtacadoPrazo!: number;
  VlPrecoAnvisa!: number;
  AliqRedBaseST!: number;
  FgEstatistica!: string;
  VlCustoBase!: number;
  IAT!: string;
  IPPT!: string;
  CdServico!: string;
  CodigoEX!: string;
  TipoMercadoria!: string;
  GeneroProduto!: string;
  IndicadorPropriedade!: string;
  ClassificacaoFiscal!: string;
  OrigemProduto!: number;
  FgPesavel!: string;
  PercLucroVarejo!: number;
  PercLucroAtacado!: number;
  ControleNum!: string;
  CNPJProdutor!: number;
  QtdeUnidadesVenda!: number;
  FgOcultaSelecaoRapida!: string;
  QuantidadeEmbalagem!: number;
  FgValidadeIndeterminada!: string;
  CEST!: number;
  CNatOpe!: number;
  NaturezaReceita!: number;
  FgIndProdEscalaRelevante!: string;
  QtdeVendaAtacado!: number;
  CdProdutoMestre!: string;
  DescontoF!: number;
  DescontoG!: number;
  DescontoH!: number;
  DescontoI!: number;
  DescontoJ!: number;
  FgCombo!: string;
  IdWeb!: number;
  

  static getFields() {
    return [
      "AcresFinanc",
      "AliqIrrf",
      "CkTabela",
      "Correcao",
      "CustoContabil",
      "CustoEmb",
      "CustoFinanc",
      "CustoFrete",
      "Desc1",
      "Desc2",
      "Desc3",
      "Desc4",
      "Desc5",
      "Desc6",
      "DescontoSubstituicao",
      "DifICMS",
      "DtUltPedido",
      "DtUltVenda",
      "FgComposto",
      "FgControlaSerie",
      "FgEtiquetaBalanca",
      "Fragmentada",
      "MedidaNovo",
      "MestreGrade",
      "ObsComplementar",
      "PercAumentoFab",
      "PercComissaoPrazo",
      "PercComissaoVista",
      "PercFrete",
      "PercIpiFab",
      "PesoBruto",
      "PesoLiq",
      "Pis_Cofins",
      "PrecoAtacadoAnt",
      "PrecoVendaAnt",
      "QtdadeUltCompra",
      "ReceitaEtiqueta",
      "Servico",
      "TipoEtiqueta",
      "TipoValidadeEtiqueta",
      "TotVendaMes",
      "UltCusto",
      "ValidadeEtiqueta",
      "VlTabela",
      "ConversaoMedida",
      "Classificacao",
      "DtFinalPromAtacado",
      "DtFinalPromVarejo",
      "DtInicialPromAtacado",
      "DtInicialPromVarejo",
      "DtUltAlteracao",
      "FgKit",
      "ImprimeComponentes",
      "MargemSubstituicao",
      "TipoTributacao",
      "VlAtacado",
      "VlPromocaoAtacado",
      "VlPromocaoVarejo",
      "CdInterno",
      "CdRefEstoque",
      "CdReferencia",
      "DescontoA",
      "DescontoB",
      "DescontoC",
      "DescontoD",
      "DescontoE",
      "DescontoFidelidade",
      "Observacao",
      "CdProduto",
      "CdDepartamento",
      "CdFornecedor",
      "DtCadastro",
      "VlCusto",
      "VlVenda",
      "VlVendaAnt",
      "FgAtivo",
      "FgEstoque",
      "SitBal",
      "PercLucro",
      "DtPromocao",
      "CdCategoria",
      "Fracionamento",
      "NomeDoSal",
      "FgPsico",
      "CdDCB",
      "CdFabricante",
      "Area",
      "Espessura",
      "Largura",
      "Comprimento",
      "CdGrupo",
      "CdSubGrupo",
      "DptoEtiqueta",
      "Classificacao10147",
      "FgMoedaEspecifica",
      "FgLoteControlado",
      "FgBancoHoras",
      "FgManipulado",
      "FgPrecoTabelado",
      "DescricaoDCB",
      "UnidadePesagem",
      "FgEmbalagem",
      "Capacidade",
      "FgDescVendedorDireto",
      "PercDescMaxGerente",
      "PercDescMaxVendedor",
      "FgComplementoVenda",
      "CdMarca",
      "FgPercLimite",
      "DescMaxPermitido",
      "CdProdutoNumerico",
      "DtUltCompra",
      "VlUltCompra",
      "PoliticaPreco",
      "PercRedCusto",
      "FgQtdeFixa",
      "CustoAlternativo",
      "Cdmoeda",
      "Equivalencia",
      "FgProdFinal",
      "VlManipulacao",
      "FgQsp",
      "MedidaAdicional",
      "VlAdicional",
      "MedidaPadrao",
      "Descricao",
      "Complemento",
      "FgPrecoFabrica",
      "CriterioReposicao",
      "PercDescVista",
      "PercDescPrazo",
      "MultiplicadorManipulacao",
      "VlUltCusto",
      "DtUltAlteracaoVlTabela",
      "DtUltAlteracaoVlCusto",
      "DtUltAlteracaoVlVenda",
      "DtUltAlteracaoVlAtacado",
      "TipoReposicao",
      "UnidadeProdutiva",
      "CdClasseTerapeutica",
      "DescontoEspecial",
      "PercDescExtra",
      "PontosMilhagem",
      "CdMoedaCustoMedio",
      "Abreviatura",
      "DoseMinima",
      "DoseMaxima",
      "FgCapsula",
      "CdSal",
      "PontosMilhagemDebito",
      "FgRegistro74",
      "PercMaximo",
      "FgVMSCard",
      "DescontoFidelizacao",
      "FgUsoContinuo",
      "PosologiaDia",
      "Unidade",
      "TipoReceita",
      "NumUltLote",
      "FgBloqueioCompra",
      "CodiGONCM",
      "FgCompraCentralizada",
      "PercComissaoVarejoVista",
      "PercComissaoAtacadoVista",
      "PercComissaoVarejoPrazo",
      "PercComissaoAtacadoPrazo",
      "VlPrecoAnvisa",
      "AliqRedBaseST",
      "FgEstatistica",
      "VlCustoBase",
      "IAT",
      "IPPT",
      "CdServico",
      "CodigoEX",
      "TipoMercadoria",
      "GeneroProduto",
      "IndicadorPropriedade",
      "ClassificacaoFiscal",
      "OrigemProduto",
      "FgPesavel",
      "PercLucroVarejo",
      "PercLucroAtacado",
      "ControleNum",
      "CNPJProdutor",
      "QtdeUnidadesVenda",
      "FgOcultaSelecaoRapida",
      "QuantidadeEmbalagem",
      "FgValidadeIndeterminada",
      "CEST",
      "CNatOpe",
      "NaturezaReceita",
      "FgIndProdEscalaRelevante",
      "QtdeVendaAtacado",
      "CdProdutoMestre",
      "DescontoF",
      "DescontoG",
      "DescontoH",
      "DescontoI",
      "DescontoJ",
      "FgCombo",
      "IdWeb",
      ];
  }
}

CadPro.knex(connections.plano);

export type TCadPro = ModelObject<CadPro>;

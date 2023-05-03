import { TFieldDef, TOrder, TSelect, TWhere } from "@/types";
//#region import
//#endregion
export interface TProdutoPlanoPk {
  produto_plano_id?: string;
}
export interface TProdutoPlano extends TProdutoPlanoPk {
  produto?: string;
  AcresFinanc?: number;
  AliqIrrf?: number;
  CkTabela?: string;
  Correcao?: number;
  CustoContabil?: number;
  CustoEmb?: number;
  CustoFinanc?: number;
  CustoFrete?: number;
  Desc1?: number;
  Desc2?: number;
  Desc3?: number;
  Desc4?: number;
  Desc5?: number;
  Desc6?: number;
  DescontoSubstituicao?: number;
  DifICMS?: number;
  DtUltPedido?: string;
  DtUltVenda?: string;
  eh_composto?: string;
  eh_controla_serie?: string;
  FgEtiquetaBalanca?: string;
  Fragmentada?: string;
  MedidaNovo?: string;
  MestreGrade?: string;
  ObsComplementar?: string;
  PercAumentoFab?: number;
  PercComissaoPrazo?: number;
  PercComissaoVista?: number;
  PercFrete?: number;
  PercIpiFab?: number;
  PesoBruto?: number;
  PesoLiq?: number;
  Pis_Cofins?: number;
  PrecoAtacadoAnt?: number;
  PrecoVendaAnt?: number;
  QtdadeUltCompra?: number;
  ReceitaEtiqueta?: number;
  Servico?: string;
  TipoEtiqueta?: number;
  TipoValidadeEtiqueta?: string;
  TotVendaMes?: number;
  UltCusto?: number;
  ValidadeEtiqueta?: number;
  VlTabela?: number;
  ConversaoMedida?: number;
  Classificacao?: string;
  DtFinalPromAtacado?: string;
  DtFinalPromVarejo?: string;
  DtInicialPromAtacado?: string;
  DtInicialPromVarejo?: string;
  DtUltAlteracao?: string;
  eh_kit?: string;
  ImprimeComponentes?: string;
  MargemSubstituicao?: number;
  TipoTributacao?: string;
  VlAtacado?: number;
  VlPromocaoAtacado?: number;
  VlPromocaoVarejo?: number;
  CdInterno?: string;
  CdRefEstoque?: string;
  CdReferencia?: string;
  DescontoA?: number;
  DescontoB?: number;
  DescontoC?: number;
  DescontoD?: number;
  DescontoE?: number;
  DescontoFidelidade?: number;
  Observacao?: string;
  departamento_id?: number;
  fornecedor_id?: number;
  DtCadastro?: string;
  VlCusto?: number;
  VlVenda?: number;
  VlVendaAnt?: number;
  eh_ativo?: string;
  eh_estoque?: string;
  SitBal?: string;
  PercLucro?: number;
  DtPromocao?: string;
  categoria_id?: string;
  Fracionamento?: number;
  NomeDoSal?: string;
  CdDCB?: string;
  fabricante_id?: number;
  Area?: number;
  Espessura?: number;
  Largura?: number;
  Comprimento?: number;
  CdGrupo?: number;
  CdSubGrupo?: number;
  DptoEtiqueta?: number;
  Classificacao10147?: string;
  FgMoedaEspecifica?: string;
  FgLoteControlado?: string;
  FgBancoHoras?: string;
  FgPrecoTabelado?: string;
  DescricaoDCB?: string;
  UnidadePesagem?: string;
  FgEmbalagem?: string;
  Capacidade?: number;
  FgDescVendedorDireto?: string;
  PercDescMaxGerente?: number;
  PercDescMaxVendedor?: number;
  FgComplementoVenda?: string;
  CdMarca?: number;
  FgPercLimite?: string;
  DescMaxPermitido?: number;
  CdProdutoNumerico?: number;
  DtUltCompra?: string;
  VlUltCompra?: number;
  PoliticaPreco?: string;
  PercRedCusto?: number;
  FgQtdeFixa?: string;
  CustoAlternativo?: number;
  Cdmoeda?: string;
  Equivalencia?: number;
  FgProdFinal?: string;
  VlManipulacao?: number;
  FgQsp?: string;
  MedidaAdicional?: number;
  VlAdicional?: number;
  MedidaPadrao?: number;
  Complemento?: string;
  FgPrecoFabrica?: string;
  CriterioReposicao?: string;
  VlUltCusto?: number;
  TipoReposicao?: string;
  UnidadeProdutiva?: string;
  DescontoEspecial?: number;
  PercDescExtra?: number;
  CdMoedaCustoMedio?: string;
  Abreviatura?: string;
  CdSal?: number;
  FgRegistro74?: string;
  PercMaximo?: number;
  FgVMSCard?: string;
  unidade?: string;
  TipoReceita?: string;
  NumUltLote?: number;
  FgBloqueioCompra?: string;
  ncm?: string;
  FgCompraCentralizada?: string;
  AliqRedBaseST?: number;
  eh_estatistica?: string;
  VlCustoBase?: number;
  IAT?: string;
  IPPT?: string;
  CdServico?: string;
  CodigoEX?: string;
  TipoMercadoria?: string;
  GeneroProduto?: string;
  IndicadorPropriedade?: string;
  ClassificacaoFiscal?: string;
  OrigemProduto?: number;
  FgPesavel?: string;
  PercLucroVarejo?: number;
  PercLucroAtacado?: number;
  controle?: string;
  CNPJProdutor?: number;
  QtdeUnidadesVenda?: number;
  FgOcultaSelecaoRapida?: string;
  QuantidadeEmbalagem?: number;
  FgValidadeIndeterminada?: string;
  CEST?: number;
  CNatOpe?: number;
  NaturezaReceita?: number;
  FgIndProdEscalaRelevante?: string;
  QtdeVendaAtacado?: number;
  id_produto_mestre?: string;
  FgCombo?: string;
}

export type TProdutoPlanoFields = keyof Required<TProdutoPlano>;

export type TProdutoPlanoIds = {
  [pk in keyof Required<TProdutoPlanoPk>]: any;
};
export type TProdutoPlanoSelect = TSelect<TProdutoPlanoFields>;
export type TProdutoPlanoWhere = TWhere<TProdutoPlanoFields>;
export type TProdutoPlanoOrder = TOrder<TProdutoPlanoFields>;

export type TProdutoPlanoSchema = () => Promise<TFieldDef[]>;
export type TProdutoPlanoClear = () => Promise<TProdutoPlano>;
export type TProdutoPlanoList = (args: {
  where?: TWhere<TProdutoPlanoFields>[];
  order?: TOrder<TProdutoPlanoFields>[];
  limit?: number;
  select?: TSelect<TProdutoPlanoFields>;
}) => Promise<TProdutoPlano[]>;
export type TProdutoPlanoRead = (args: {
  id: TProdutoPlanoIds;
  select?: TSelect<TProdutoPlanoFields>;
}) => Promise<TProdutoPlano>;

export type TProdutoPlanoCreate = (args: {
  data: TProdutoPlano;
  select?: TSelect<TProdutoPlanoFields>;
}) => Promise<TProdutoPlano>;
export type TProdutoPlanoUpdate = (args: {
  id: TProdutoPlanoIds;
  data: TProdutoPlano;
  select?: TSelect<TProdutoPlanoFields>;
}) => Promise<TProdutoPlano>;
export type TProdutoPlanoDel = (args: {
  id: TProdutoPlanoIds;
}) => Promise<number>;

//#region def
//#endregion

export type TProdutoPlanoCrud = {
  query: {
    schema: TProdutoPlanoSchema;
    clear: TProdutoPlanoClear;
    list: TProdutoPlanoList;
    read: TProdutoPlanoRead;
  };
  mutation: {
    create: TProdutoPlanoCreate;
    update: TProdutoPlanoUpdate;
    del: TProdutoPlanoDel;
  };
};

export type TProdutoPlanoModel = TProdutoPlanoCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TProdutoPlanoRpc = TProdutoPlanoModel;

import { TFieldClient, TOrder, TSelect, TWhere } from ".";

export type TNfSaidaPk = {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
  modelo_id?: string;
};
export type TNfSaidaCol = {
  data_emissao?: string;
  Tipo?: string;
  cliente_id?: number;
  vendedor_id?: number;
  FgEstatistica?: string;
  FgEstoque?: string;
  valor_total?: number;
  valor_base_calculo?: number;
  BaseSubstituicao?: number;
  IcmsSubstituicao?: number;
  valor_icms?: number;
  VlIRRF?: number;
  VlISS?: number;
  VlProdutos?: number;
  valor_frete?: number;
  valor_seguro?: number;
  VlAcessorias?: number;
  VlIPI?: number;
  Servico?: string;
  VlServico?: number;
  pedido_id?: number;
  OrdemCompra?: string;
  NumNotaOrigem?: number;
  DtUltAlteracao?: string;
  horario?: string;
  FgRatearDescontoAcrescimo?: string;
  FgDesconto?: string;
  valor_desconto?: number;
  NumCupomFiscalOrigem?: number;
  NumPDVOrigem?: number;
  CdFilialAssociada?: number;
  CdVendedorExtra?: number;
  NotadeComplemento?: string;
  valor_troco?: number;
  VlBaseCalculoIRRF?: number;
  PercAliqIRRF?: number;
  VlBaseCalculoIN381?: number;
  PercAliqIN381?: number;
  VlIN381?: number;
  PercParticipPrazo?: number;
  PercParticipVista?: number;
  RedutorComissao?: number;
  GrupoFiscal?: number;
  CdTipoVenda?: number;
  CdFuncionario?: number;
  CdUsuario?: string;
  Nop?: number;
  NopFiscal?: number;
  VlImpostoDiferido?: number;
  CdLocalEstoque?: number;
  VlIPIFrete?: number;
  VlBaseCalculoII?: number;
  VlII?: number;
  DtSaida?: string;
  VlBaseCalculoIPI?: number;
  VlPISSubstituido?: number;
  VlCofinsSubstituido?: number;
  VlBaseCalculoPIS?: number;
  VlPIS?: number;
  VlBaseCalculoCOFINS?: number;
  VlCofins?: number;
  VlAproximadoImpostoNota?: number;
  CdSituacaoDocumento?: string;
  SerieNotaOrigem?: string;
  ModeloNotaOrigem?: string;
  VlDeducaoFiscal?: number;
  DescricaoNop?: string;
  TipoNota?: string;
  IndicadorFormaPgto?: number;
  FinalidadeNf?: string;
  FgVendaConsumidor?: string;
  FgDiferencialAliquota?: string;
  SituacaoNfe?: string;
  AmbienteNfe?: number;
  NumOrdemFaturamento?: number;
  FgImportacao?: string;
  IndicadorPresenca?: string;
  FgNfTerceiros?: string;
  VlAproximadoImpostoFederal?: number;
  VlAproximadoImpostoEstadual?: number;
  VlAproximadoImpostoMunicipal?: number;
  VlFCP?: number;
  VlFCPST?: number;
  NomeAdquirente?: string;
  CPFCNPJAdquirente?: number;
  percComissao?: number;
};
export type TNfSaida = TNfSaidaPk | TNfSaidaCol;

export type TNfSaidaFields =
  | keyof Required<TNfSaidaPk>
  | keyof Required<TNfSaidaCol>;

export type TNfSaidaIds = {
  [pk in keyof Required<TNfSaidaPk>]: any;
};
export type TNfSaidaSelect = TSelect<TNfSaidaFields>;
export type TNfSaidaWhere = TWhere<TNfSaidaFields>;
export type TNfSaidaOrder = TOrder<TNfSaidaFields>;

export type TNfSaidaSchema = () => Promise<TFieldClient[]>;
export type TNfSaidaClear = () => Promise<TNfSaida>;
export type TNfSaidaList = (args: {
  where?: TWhere<TNfSaidaFields>[];
  order?: TOrder<TNfSaidaFields>[];
  limit?: number;
  select?: TSelect<TNfSaidaFields>;
}) => Promise<TNfSaida[]>;
export type TNfSaidaRead = (args: {
  id: TNfSaidaIds;
  select?: TSelect<TNfSaidaFields>;
}) => Promise<TNfSaida>;

export type TNfSaidaCreate = (args: { data: TNfSaida }) => Promise<TNfSaida>;
export type TNfSaidaUpdate = (args: {
  id: TNfSaidaIds;
  data: TNfSaida;
}) => Promise<TNfSaida>;
export type TNfSaidaDel = (args: { id: TNfSaidaIds }) => Promise<number>;

type ProdutoQtd = {
  LITEFLEX?: number;
  METILCELULOSE?: number;
  "CORNEAL RING"?: number;
  ENLITE?: number;
  "ANEL CAPSULAR"?: number;
};

export type TNfSaidaRpc = {
  query: {
    schema: TNfSaidaSchema;
    clear: TNfSaidaClear;
    list: TNfSaidaList;
    read: TNfSaidaRead;
    transferenciaDiario(args: {
      inicio: string;
      fim: string;
    }): Promise<({ dia: string } & ProdutoQtd)[]>;
    transferenciaDiarioSchema(): Promise<TFieldClient[]>;
    transferenciaMensal(args: {
      mes: string;
    }): Promise<({ mes: string } & ProdutoQtd)[]>;
    transferenciaMensalSchema(): Promise<TFieldClient[]>;
    transferenciaModelo({
      data,
    }: {
      data: string;
    }): Promise<{ modelo: string; quantidade: number }[]>;
    vendaDiario(args: { inicio: string; fim: string; uf: string[] }): Promise<
      {
        NmCategoria: string;
        DtEmissao: string;
        quantidade: number;
        valor: number;
      }[]
    >;
    vendaDiarioSchema(): Promise<TFieldClient[]>;
    vendaMensalCliente({
      inicio,
      fim,
      cliente,
    }: {
      inicio: string;
      fim: string;
      cliente: number;
    }): Promise<
      {
        NmCategoria: string;
        CdCliente: number;
        anoMes: string;
        quantidade: number;
        valor: number;
      }[]
    >;
    vendaMensalClienteSchema(): Promise<TFieldClient[]>;
    vendaAnalitico(args: { inicio: string; fim: string }): Promise<TNfSaida[]>;
    vendaAnaliticoSchema(): Promise<TFieldClient[]>;
    transferenciaModeloSchema(): Promise<TFieldClient[]>;
  };
  // mutation: {
  //   nfSaidaCreate: TNfSaidaCreate;
  //   update: TNfSaidaUpdate;
  //   del: TNfSaidaDel;
  // };
};

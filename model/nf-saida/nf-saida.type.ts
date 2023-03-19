import { TFieldDef, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TNfSaidaPk {
  filial_id?: number;
  nota_id?: number;
  serie_id?: string;
  modelo_id?: string;
}
export interface TNfSaida extends TNfSaidaPk {
  data_emissao?: string;
  tipo?: string;
  cliente_id?: number;
  vendedor_id?: number;
  eh_estatistica?: string;
  eh_estoque?: string;
  valor_total?: number;
  valor_base_calculo?: number;
  BaseSubstituicao?: number;
  IcmsSubstituicao?: number;
  valor_icms?: number;
  VlIRRF?: number;
  VlISS?: number;
  valor_produto?: number;
  valor_frete?: number;
  valor_seguro?: number;
  VlAcessorias?: number;
  VlIPI?: number;
  Servico?: string;
  VlServico?: number;
  pedido_id?: number;
  compra_id?: string;
  NumNotaOrigem?: number;
  DtUltAlteracao?: string;
  horario?: string;
  FgRatearDescontoAcrescimo?: string;
  eh_desconto?: string;
  valor_desconto?: number;
  NumCupomFiscalOrigem?: number;
  NumPDVOrigem?: number;
  CdFilialAssociada?: number;
  CdVendedorExtra?: number;
  nota_complemento?: string;
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
  tipo_venda_id?: number;
  funcionario_id?: number;
  usuario_id?: string;
  cfop?: number;
  cfop_fiscal?: number;
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
  tipoNota?: string;
  IndicadorFormaPgto?: number;
  FinalidadeNf?: string;
  eh_venda_consumidor?: string;
  eh_diferencial_aliquota?: string;
  SituacaoNfe?: string;
  AmbienteNfe?: number;
  NumOrdemFaturamento?: number;
  eh_importacao?: string;
  IndicadorPresenca?: string;
  eh_nf_terceiro?: string;
  VlAproximadoImpostoFederal?: number;
  VlAproximadoImpostoEstadual?: number;
  VlAproximadoImpostoMunicipal?: number;
  VlFCP?: number;
  VlFCPST?: number;
  NomeAdquirente?: string;
  CPFCNPJAdquirente?: number;
  percComissao?: number;
}

export type TNfSaidaFields = keyof Required<TNfSaida>;

export type TNfSaidaIds = {
  [pk in keyof Required<TNfSaidaPk>]: any;
};
export type TNfSaidaSelect = TSelect<TNfSaidaFields>;
export type TNfSaidaWhere = TWhere<TNfSaidaFields>;
export type TNfSaidaOrder = TOrder<TNfSaidaFields>;

export type TNfSaidaSchema = () => Promise<TFieldDef[]>;
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

export type TNfSaidaCreate = (args: {
  data: TNfSaida;
  select?: TSelect<TNfSaidaFields>;
}) => Promise<TNfSaida>;
export type TNfSaidaUpdate = (args: {
  id: TNfSaidaIds;
  data: TNfSaida;
  select?: TSelect<TNfSaidaFields>;
}) => Promise<TNfSaida>;
export type TNfSaidaDel = (args: { id: TNfSaidaIds }) => Promise<number>;

//#region def
export type TNfTransferenciaDiario = (args: {
  inicio: string;
  fim: string;
}) => Promise<({ dia: string } & TProdutoQtd)[]>;
export type TNfTransferenciaMensal = (args: {
  mes: string;
}) => Promise<({ mes: string } & TProdutoQtd)[]>;
export type TNfTransferenciaModelo = (args: {
  data: string;
}) => Promise<{ modelo: string; quantidade: number }[]>;

export type TNfVendaDiario = (args: {
  inicio: string;
  fim: string;
  uf: string[];
}) => Promise<
  {
    NmCategoria: string;
    DtEmissao: string;
    quantidade: number;
    valor: number;
  }[]
>;
export type TNfVendaAnalitico = (args: {
  inicio: string;
  fim: string;
}) => Promise<TNfSaida[]>;
export type TNfVendaMensalCliente = (args: {
  inicio: string;
  fim: string;
  cliente: number;
}) => Promise<
  {
    NmCategoria: string;
    CdCliente: number;
    anoMes: string;
    quantidade: number;
    valor: number;
  }[]
>;

export type TProdutoQtd = {
  LITEFLEX?: number;
  METILCELULOSE?: number;
  "CORNEAL RING"?: number;
  ENLITE?: number;
  "ANEL CAPSULAR"?: number;
};
//#endregion

export type TNfSaidaCrud = {
  query: {
    schema: TNfSaidaSchema;
    clear: TNfSaidaClear;
    list: TNfSaidaList;
    read: TNfSaidaRead;
  };
  mutation: {
    create: TNfSaidaCreate;
    update: TNfSaidaUpdate;
    del: TNfSaidaDel;
  };
};

export type TNfSaidaModel = TNfSaidaCrud & {
  //#region query

  //#endregion
  //#region mutation
  //#endregion
  //#region type
  query: {
    transferenciaDiario: TNfTransferenciaDiario;
    transferenciaDiarioSchema(): Promise<TFieldDef[]>;
    transferenciaMensal: TNfTransferenciaMensal;
    transferenciaMensalSchema(): Promise<TFieldDef[]>;
    transferenciaModelo: TNfTransferenciaModelo;
    transferenciaModeloSchema(): Promise<TFieldDef[]>;
    vendaDiario: TNfVendaDiario;
    vendaDiarioSchema(): Promise<TFieldDef[]>;
    vendaMensalCliente: TNfVendaMensalCliente;
    vendaMensalClienteSchema(): Promise<TFieldDef[]>;
    vendaAnalitico: TNfVendaAnalitico;
    vendaAnaliticoSchema(): Promise<TFieldDef[]>;
  };
  //#endregion
};

export type TNfSaidaRpc = TNfSaidaModel;

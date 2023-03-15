import { TField, TOrder, TSelect, TWhere } from "../../types";
//#region import
//#endregion
export interface TPedidoItemPk {
  filial_id?: number;
  pedido_id?: number;
}
export interface TPedidoItem extends TPedidoItemPk {
  CdProduto?: string;
  Tipo?: string;
  DtPrevEntrega?: string;
  Sequencia?: number;
  CdRefEstoque?: string;
  CdKit?: string;
  Qtde?: number;
  ConversaoMedida?: number;
  Correcao?: number;
  FgPeso?: string;
  ICMS?: number;
  ImprimeComponentes?: string;
  Peso?: string;
  SelecProd?: string;
  VlDescontoFechamento?: number;
  VlUnitario?: number;
  PercDesconto?: number;
  VlDesconto?: number;
  VlLiquido?: number;
  IPI?: number;
  VlTotal?: number;
  CustoFinanc?: number;
  QtdeAtendida?: number;
  CdAcumuladorParcial?: number;
  ComplementoDescricao?: string;
  CRM?: string;
  PercLimiteComissao?: number;
  NumFormula?: number;
  VlVistaUnit?: number;
  VlPrazoUnit?: number;
  VlFidelidadeUnit?: number;
  QtdeFormula?: number;
  DescricaoAlterada?: string;
  StatusTRN?: number;
  Unidade?: string;
  FgImprimeObs?: string;
  DtReceita?: string;
  TributacaoICMS?: number;
  NumPedidoEmitente?: string;
  CdProjeto?: number;
  fgBuscaDCB?: string;
  PrazoEntregaItem?: string;
  VlVendaOriginal?: number;
  VlAcrescimo?: number;
  FgSituacaoItem?: string;
  DtEmissao?: string;
  FgPreVenda?: string;
  ControleNum?: number;
  ControleSeq?: number;
  SituacaoTributaria?: string;
  AliquotaICMS?: number;
  DescricaoProduto?: string;
  PercDescontoOriginal?: number;
  AliquotaICMSST?: number;
  CdSetorEntrega?: number;
  VlPesoBruto?: number;
  CdStatus?: number;
  VlAcrescimoProduto?: number;
  VlUnitarioNovo?: number;
}

export type TPedidoItemFields = keyof Required<TPedidoItem>;

export type TPedidoItemIds = {
  [pk in keyof Required<TPedidoItemPk>]: any;
};
export type TPedidoItemSelect = TSelect<TPedidoItemFields>;
export type TPedidoItemWhere = TWhere<TPedidoItemFields>;
export type TPedidoItemOrder = TOrder<TPedidoItemFields>;

export type TPedidoItemSchema = () => Promise<TField[]>;
export type TPedidoItemClear = () => Promise<TPedidoItem>;
export type TPedidoItemList = (args: {
  where?: TWhere<TPedidoItemFields>[];
  order?: TOrder<TPedidoItemFields>[];
  limit?: number;
  select?: TSelect<TPedidoItemFields>;
}) => Promise<TPedidoItem[]>;
export type TPedidoItemRead = (args: {
  id: TPedidoItemIds;
  select?: TSelect<TPedidoItemFields>;
}) => Promise<TPedidoItem>;

export type TPedidoItemCreate = (args: {
  data: TPedidoItem;
  select?: TSelect<TPedidoItemFields>;
}) => Promise<TPedidoItem>;
export type TPedidoItemUpdate = (args: {
  id: TPedidoItemIds;
  data: TPedidoItem;
  select?: TSelect<TPedidoItemFields>;
}) => Promise<TPedidoItem>;
export type TPedidoItemDel = (args: { id: TPedidoItemIds }) => Promise<number>;

//#region def
//#endregion

export type TPedidoItemCrud = {
  query: {
    schema: TPedidoItemSchema;
    clear: TPedidoItemClear;
    list: TPedidoItemList;
    read: TPedidoItemRead;
  };
  mutation: {
    create: TPedidoItemCreate;
    update: TPedidoItemUpdate;
    del: TPedidoItemDel;
  };
};

export type TPedidoItemModel = TPedidoItemCrud & {
  //#region query
  //#endregion
  //#region mutation
  //#endregion
  //#region type
  //#endregion
};

export type TPedidoItemRpc = TPedidoItemModel;

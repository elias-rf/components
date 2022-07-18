import {
  Id,
  RpcContext,
  RpcCreateArgs,
  RpcDelArgs,
  RpcListArgs,
  RpcReadArgs,
  RpcUpdateArgs,
} from "@vt/types";
import {
  idSchema,
  idToWhere,
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
} from "@vt/utils";
import { Connections } from "dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  CdEmpresa?: number;
  NroNF?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: number;
  CdProduto?: string;
  FgCusto?: string;
  FgEtiqueta?: string;
  PercIcms?: number;
  PercIpi?: number;
  Quantidade?: number;
  TipoMovimentacao?: string;
  VlAcrescItem?: number;
  VlDescItem?: number;
  VlrIcms?: number;
  VlrIpi?: number;
  VlTotItem?: number;
  TipoTributacao?: string;
  VlBaseSub?: number;
  VlIcmsSub?: number;
  DtEntr?: string;
  FgEstoque?: string;
  VlRepasseICMSItem?: number;
  FgICMSJaRecolhido?: number;
  PrecPMC?: number;
  VlRelacionado?: number;
  FgCompoeBaseSub?: string;
  Nop?: number;
  NopFiscalItem?: number;
  VlBaseCalculoICMS?: number;
  VlBrutoUnitario?: number;
  VlLiquidoUnitario?: number;
  CdBaseCalculoCreditoPISCOFINS?: number;
  CdTipoCreditoPISCOFINS?: number;
  CdContribuicaoApuradaPISCOFINS?: number;
  Sequencia?: number;
  VlBaseCalculoIPI?: number;
  FgConferido?: string;
};

export interface NfEntradaItemRpc {
  nfEntradaItemList: (
    listArgs: RpcListArgs,
    ctx?: RpcContext
  ) => Promise<Record[]>;
  nfEntradaItemRead: (
    readArgs: RpcReadArgs,
    ctx?: RpcContext
  ) => Promise<Record>;
  nfEntradaItemDel: (delArgs: RpcDelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaItemCreate: (
    createArgs: RpcCreateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaItemUpdate: (
    { id, rec }: RpcUpdateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function NfEntradaItem(connections: Connections): NfEntradaItemRpc {
  const knexPlano = connections.plano;
  const table = "NfItem";
  const pk = ["CdEmpresa", "NroNf", "Serie", "Modelo", "Sequencia"];
  const select = [
    "CdEmpresa",
    "NroNf",
    "Serie",
    "Modelo",
    "CdFornecedor",
    "CdProduto",
    "FgCusto",
    "FgEtiqueta",
    "PercIcms",
    "PercIpi",
    "Quantidade",
    "TipoMovimentacao",
    "VlAcrescItem",
    "VlDescItem",
    "VlrIcms",
    "VlrIpi",
    "VlTotItem",
    "TipoTributacao",
    "VlBaseSub",
    "VlIcmsSub",
    "DtEntr",
    "FgEstoque",
    "VlRepasseICMSItem",
    "FgICMSJaRecolhido",
    "PrecPMC",
    "VlRelacionado",
    "FgCompoeBaseSub",
    "Nop",
    "NopFiscalItem",
    "VlBaseCalculoICMS",
    "VlBrutoUnitario",
    "VlLiquidoUnitario",
    "CdBaseCalculoCreditoPISCOFINS",
    "CdTipoCreditoPISCOFINS",
    "CdContribuicaoApuradaPISCOFINS",
    "Sequencia",
    "VlBaseCalculoIPI",
    "FgConferido",
  ];
  return {
    // LIST
    async nfEntradaItemList(
      { where = [], orderBy = [], limit = 50 }: RpcListArgs,
      ctx?: RpcContext
    ): Promise<Record[]> {
      validator(where, "where", whereSchema);
      validator(orderBy, "orderBy", orderBySchema);
      validator(limit, "limit", limitSchema);

      return knexPlano(table)
        .select(select)
        .limit(limit)
        .where(knexWhere(where))
        .orderBy(knexOrder(orderBy));
    },

    // READ
    async nfEntradaItemRead(
      { id }: RpcReadArgs,
      ctx?: RpcContext
    ): Promise<Record> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table)
        .select(select)
        .where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry as unknown as Record;
    },

    // DEL
    async nfEntradaItemDel(
      { id }: RpcDelArgs,
      ctx?: RpcContext
    ): Promise<number> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).del().where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async nfEntradaItemCreate(
      { rec }: RpcCreateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async nfEntradaItemUpdate(
      { id, rec }: RpcUpdateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(id, "id", idSchema);
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table)
        .update(rec)
        .where(idToWhere(pk, id))
        .returning(pk);
      return qry;
    },
  };
}

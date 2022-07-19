import type {
  Id,
  RpcContext,
  RpcCreateArgs,
  RpcDelArgs,
  RpcListArgs,
  RpcReadArgs,
  RpcUpdateArgs,
} from "../../../types";
import {
  idSchema,
  idToWhere,
  limitSchema,
  orderBySchema,
  recordSchema,
  validator,
  whereSchema,
} from "../../../utils";
import type { Connections } from "../dal/connections";
import { knexOrder } from "../lib/knex/knex-order";
import { knexWhere } from "../lib/knex/knex-where";

type Record = {
  CdEmpresa?: number;
  NroNf?: string;
  Serie?: string;
  Modelo?: string;
  CdFornecedor?: number;
  DtEmi?: string;
  DtEntr?: string;
  Nop: number;
  NopFiscal: number;
  TotNf: number;
  BaseSubstituicao: number;
  IPIBasCalc: number;
  IPIVlr: number;
  IPIFrete: number;
  ICMSBasCalc: number;
  IcmsVlr: number;
  ICMSRetido: number;
  ICMSOperPropria: number;
  ICMSFrete: number;
  Frete: number;
  Seguro: number;
  DtValidacao: string;
  VlMercadorias: number;
  ConPag: string;
  Tipo: string;
  Horario: string;
  FgIPICompoeBase: string;
  VlNfComplementar: number;
  FgIPICompoeBaseSub: string;
  FgEstoque: string;
  IdParametro: number;
  GrupoFiscal: number;
  FgConferencia: string;
  VlRepasseICMS: number;
  FgSomaICMSSub: string;
  DtConferencia: string;
  SgUsuario: string;
  dsObservacao: string;
  FgUtilizaPercRedBCIcms: string;
  VlDespAcessorias: number;
  NumNotaRelacionada: number;
  VlNotaRelacionada: number;
  FgDespesasCompoeTotal: string;
  NumChaveNfe: string;
  FgXML: string;
  FgGNRE: string;
  FgFreteCompoeBaseICMS: string;
  FgFreteCompoeBaseIPI: string;
  FgFreteCompoeVlProdutos: string;
  FgFreteCompoeTotal: string;
  FgDespesasCompoeBaseICMS: string;
  FgDespesasCompoeBaseIPI: string;
  FgDespesasCompoeVlProdutos: string;
  FgSeguroCompoeVlProdutos: string;
  FgSeguroCompoeBaseICMS: string;
  FgSeguroCompoeBaseIPI: string;
  FgSeguroCompoeTotal: string;
};

export interface NfEntradaRpc {
  nfEntradaList: (listArgs: RpcListArgs, ctx?: RpcContext) => Promise<Record[]>;
  nfEntradaRead: (readArgs: RpcReadArgs, ctx?: RpcContext) => Promise<Record>;
  nfEntradaDel: (delArgs: RpcDelArgs, ctx?: RpcContext) => Promise<number>;
  nfEntradaCreate: (
    createArgs: RpcCreateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
  nfEntradaUpdate: (
    { id, rec }: RpcUpdateArgs<Record>,
    ctx?: RpcContext
  ) => Promise<Id>;
}

export function NfEntrada(connections: Connections): NfEntradaRpc {
  const knexPlano = connections.plano;
  const table = "NfMestre";
  const pk = ["CdEmpresa", "NroNf", "Serie", "Modelo"];
  const select = [
    "CdEmpresa",
    "NroNf",
    "Serie",
    "Modelo",
    "CdFornecedor",
    "DtEmi",
    "DtEntr",
    "Nop",
    "NopFiscal",
    "TotNf",
    "BaseSubstituicao",
    "IPIBasCalc",
    "IPIVlr",
    "IPIFrete",
    "ICMSBasCalc",
    "IcmsVlr",
    "ICMSRetido",
    "ICMSOperPropria",
    "ICMSFrete",
    "Frete",
    "Seguro",
    "DtValidacao",
    "VlMercadorias",
    "ConPag",
    "Tipo",
    "Horario",
    "FgIPICompoeBase",
    "VlNfComplementar",
    "FgIPICompoeBaseSub",
    "FgEstoque",
    "IdParametro",
    "GrupoFiscal",
    "FgConferencia",
    "VlRepasseICMS",
    "FgSomaICMSSub",
    "DtConferencia",
    "SgUsuario",
    "dsObservacao",
    "FgUtilizaPercRedBCIcms",
    "VlDespAcessorias",
    "NumNotaRelacionada",
    "VlNotaRelacionada",
    "FgDespesasCompoeTotal",
    "NumChaveNfe",
    "FgXML",
    "FgGNRE",
    "FgFreteCompoeBaseICMS",
    "FgFreteCompoeBaseIPI",
    "FgFreteCompoeVlProdutos",
    "FgFreteCompoeTotal",
    "FgDespesasCompoeBaseICMS",
    "FgDespesasCompoeBaseIPI",
    "FgDespesasCompoeVlProdutos",
    "FgSeguroCompoeVlProdutos",
    "FgSeguroCompoeBaseICMS",
    "FgSeguroCompoeBaseIPI",
    "FgSeguroCompoeTotal",
  ];
  return {
    // LIST
    async nfEntradaList(
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
    async nfEntradaRead(
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
    async nfEntradaDel({ id }: RpcDelArgs, ctx?: RpcContext): Promise<number> {
      validator(id, "id", idSchema);

      const qry = await knexPlano(table).del().where(idToWhere(pk, id));
      if (Array.isArray(qry) && qry.length > 0) {
        return qry[0];
      }
      return qry;
    },

    // CREATE
    async nfEntradaCreate(
      { rec }: RpcCreateArgs<Record>,
      ctx?: RpcContext
    ): Promise<Id> {
      validator(rec, "rec", recordSchema);

      const qry = await knexPlano(table).insert(rec).returning(pk);
      return qry;
    },

    // UPDATE
    async nfEntradaUpdate(
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

import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../../dal/connections";
import { NfSaidaFvModel } from "./nf-saida-fv.model";
import { TNfSaidaFv } from "./nf-saida-fv.type";

export interface TNfSaidaFvRpc {
  nfSaidaFvSchema: () => Promise<Schema>;
  nfSaidaFvList: (
    listArgs: ListArgs,
    ctx?: RpcContext
  ) => Promise<TNfSaidaFv[]>;
  nfSaidaFvRead: (readArgs: ReadArgs, ctx?: RpcContext) => Promise<TNfSaidaFv>;
  nfSaidaFvDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfSaidaFvCreate: (
    createArgs: CreateArgs,
    ctx?: RpcContext
  ) => Promise<TNfSaidaFv>;
  nfSaidaFvUpdate: (
    { id, data }: UpdateArgs,
    ctx?: RpcContext
  ) => Promise<TNfSaidaFv>;
  vendaFvDiario: (args: {
    inicio: string;
    fim: string;
    uf: string[];
  }) => Promise<any[]>;
  vendaFvDiarioSchema: () => Promise<Schema>;
  vendaFvMensal: (args: {
    inicio: string;
    fim: string;
    cliente_id: number;
  }) => Promise<any[]>;
  vendaFvMensalSchema: () => Promise<Schema>;
  vendaFvAnalitico: (args: { inicio: string; fim: string }) => Promise<any[]>;
  vendaFvAnaliticoSchema: () => Promise<Schema>;
}

export function nfSaidaFvRpc(connections: TConnections): TNfSaidaFvRpc {
  const nfSaidaFv = new NfSaidaFvModel(connections);

  return {
    async nfSaidaFvSchema() {
      return nfSaidaFv.schema();
    },
    // LIST
    async nfSaidaFvList(args) {
      return nfSaidaFv.list(args);
    },

    // READ
    async nfSaidaFvRead(args) {
      return nfSaidaFv.read(args);
    },

    // DEL
    async nfSaidaFvDel(args): Promise<number> {
      return nfSaidaFv.del(args);
    },

    // CREATE
    async nfSaidaFvCreate(args) {
      return nfSaidaFv.create(args);
    },

    // UPDATE
    async nfSaidaFvUpdate(args) {
      return nfSaidaFv.update(args);
    },

    // VENDA DIARIO
    async vendaFvDiario(args) {
      return nfSaidaFv.vendaDiario(args);
    },
    async vendaFvDiarioSchema() {
      return nfSaidaFv.vendaDiarioSchema();
    },

    // VENDA MENSAL
    async vendaFvMensal(args) {
      return nfSaidaFv.vendaMensal(args);
    },
    async vendaFvMensalSchema() {
      return nfSaidaFv.vendaMensalSchema();
    },
    // VENDA ANALITICO
    async vendaFvAnalitico(args) {
      return nfSaidaFv.vendaAnalitico(args);
    },
    async vendaFvAnaliticoSchema() {
      return nfSaidaFv.vendaAnaliticoSchema();
    },
  };
}

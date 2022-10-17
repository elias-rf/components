import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "../../../types";
import { TNfSaida } from "../../../types/nf-saida.type";
import type { TConnections } from "../../dal/connections";
import { NfSaidaModel } from "./nf-saida.model";

export interface TNfSaidaRpc {
  nfSaidaSchema: () => Promise<Schema>;
  nfSaidaList: (listArgs: ListArgs, ctx?: RpcContext) => Promise<TNfSaida[]>;
  nfSaidaRead: (readArgs: ReadArgs, ctx?: RpcContext) => Promise<TNfSaida>;
  nfSaidaDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfSaidaCreate: (
    createArgs: CreateArgs,
    ctx?: RpcContext
  ) => Promise<TNfSaida>;
  nfSaidaUpdate: (
    { id, data }: UpdateArgs,
    ctx?: RpcContext
  ) => Promise<TNfSaida>;
  transferenciaDiario: (args: {
    inicio: string;
    fim: string;
  }) => Promise<any[]>;
  transferenciaDiarioSchema: () => Promise<Schema>;
  transferenciaMensal: (args: { mes: string }) => Promise<any[]>;
  transferenciaMensalSchema: () => Promise<Schema>;
  transferenciaModelo: (args: { data: string }) => Promise<any[]>;
  transferenciaModeloSchema: () => Promise<Schema>;
  vendaDiario: (args: {
    inicio: string;
    fim: string;
    uf: string[];
  }) => Promise<any[]>;
  vendaDiarioSchema: () => Promise<Schema>;
  vendaMensal: (args: {
    inicio: string;
    fim: string;
    cliente: number;
  }) => Promise<any[]>;
  vendaMensalSchema: () => Promise<Schema>;
  vendaAnalitico: (args: { inicio: string; fim: string }) => Promise<any[]>;
  vendaAnaliticoSchema: () => Promise<Schema>;
}

export function nfSaidaRpc(connections: TConnections): TNfSaidaRpc {
  const nfSaida = new NfSaidaModel(connections);

  return {
    async nfSaidaSchema() {
      return nfSaida.schema();
    },
    // LIST
    async nfSaidaList(args) {
      return nfSaida.list(args);
    },

    // READ
    async nfSaidaRead(args) {
      return nfSaida.read(args);
    },

    // DEL
    async nfSaidaDel(args): Promise<number> {
      return nfSaida.del(args);
    },

    // CREATE
    async nfSaidaCreate(args) {
      return nfSaida.create(args);
    },

    // UPDATE
    async nfSaidaUpdate(args) {
      return nfSaida.update(args);
    },

    // TRANSFERENCIA DIARIO
    async transferenciaDiario(args) {
      return nfSaida.transferenciaDiario(args);
    },
    async transferenciaDiarioSchema() {
      return nfSaida.transferenciaDiarioSchema();
    },

    // TRANSFERENCIA MENSAL
    async transferenciaMensal(args) {
      return nfSaida.transferenciaMensal(args);
    },
    async transferenciaMensalSchema() {
      return nfSaida.transferenciaMensalSchema();
    },

    // TRANSFERENCIA MODELO
    async transferenciaModelo(args) {
      return nfSaida.transferenciaModelo(args);
    },
    async transferenciaModeloSchema() {
      return nfSaida.transferenciaModeloSchema();
    },

    // VENDA DIARIO
    async vendaDiario(args) {
      return nfSaida.vendaDiario(args);
    },
    async vendaDiarioSchema() {
      return nfSaida.vendaDiarioSchema();
    },

    // VENDA MENSAL
    async vendaMensal(args) {
      return nfSaida.vendaMensal(args);
    },
    async vendaMensalSchema() {
      return nfSaida.vendaMensalSchema();
    },
    // VENDA ANALITICO
    async vendaAnalitico(args) {
      return nfSaida.vendaAnalitico(args);
    },
    async vendaAnaliticoSchema() {
      return nfSaida.vendaAnaliticoSchema();
    },
  };
}

import { CurrentUser, Schema } from "@er/types";
import { TConnections } from "dal/connections";
import { NfSaidaModel, TVendas } from "../model";

export interface TVendaRpc {
  vendaDiario(
    args: { inicio: string; fim: string; uf: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  vendaAnalitico(
    args: { inicio: string; fim: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TVendas[]>;
  vendaDiarioSchema(): Promise<Schema>;
  vendaAnaliticoSchema(): Promise<Schema>;
  vendaMensal(
    args: { inicio: string; fim: string; cliente: number },
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  vendaMensalSchema(): Promise<Schema>;
}

export function vendaRpc(connections: TConnections): TVendaRpc {
  const nfSaidaModel = new NfSaidaModel(connections);

  return {
    // DIARIO
    async vendaDiario(args) {
      return nfSaidaModel.vendaDiario(args);
    },

    async vendaDiarioSchema() {
      return nfSaidaModel.vendaDiarioSchema();
    },
    // MENSAL
    async vendaMensal(args) {
      return nfSaidaModel.vendaMensal(args);
    },

    async vendaMensalSchema() {
      return nfSaidaModel.vendaMensalSchema();
    },

    async vendaAnaliticoSchema() {
      return nfSaidaModel.vendaAnaliticoSchema();
    },

    async vendaAnalitico(args) {
      return nfSaidaModel.vendaAnalitico(args);
    },
  };
}

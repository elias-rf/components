import { CurrentUser, Schema } from "@er/types";
import { TConnections } from "../../dal/connections";
import { NfEntradaModel } from "../nf-entrada/nf-entrada.model";
import { NfSaidaModel } from "../nf-saida/nf-saida.model";

export interface TTransferenciaRpc {
  transferenciaDiarioSchema(): Promise<Schema>;
  transferenciaMensalSchema(): Promise<Schema>;
  transferenciaModeloSchema(): Promise<Schema>;
  transferenciaDiario(
    { inicio, fim }: { inicio: string; fim: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  transferenciaMensal(
    { mes }: { mes: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  transferenciaModelo(
    { data }: { data: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;

  transferenciaCreate(
    { controles }: { controles: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<boolean>;
}

export function transferenciaRpc(connections: TConnections): TTransferenciaRpc {
  const nfSaidaModel = new NfSaidaModel(connections);
  const nfEntradaModel = new NfEntradaModel(connections);

  return {
    // SCHEMA DIARIO
    async transferenciaDiarioSchema() {
      return nfSaidaModel.transferenciaDiarioSchema();
    },

    // SCHEMA MENSAL
    async transferenciaMensalSchema() {
      return nfSaidaModel.transferenciaMensalSchema();
    },

    // SCHEMA MODELO
    async transferenciaModeloSchema() {
      return nfSaidaModel.transferenciaModeloSchema();
    },

    // DIARIO
    async transferenciaDiario(args) {
      return nfSaidaModel.transferenciaDiario(args);
    },

    // MENSAL
    async transferenciaMensal(args) {
      return nfSaidaModel.transferenciaMensal(args);
    },

    // MODELO
    async transferenciaModelo(args) {
      return nfSaidaModel.transferenciaModelo(args);
    },

    // Transfere produtos acabados da matriz para filial
    async transferenciaCreate(args) {
      return nfEntradaModel.nfEntradaTransferenciaCreate(args);
    },
  };
}

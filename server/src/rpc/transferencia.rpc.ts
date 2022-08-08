import { CurrentUser } from "@er/types";
import { Connections } from "dal/connections";
import { NfEntradaModel } from "../model/plano/nf-entrada.model";
import { NfSaidaModel } from "../model/plano/nf-saida.model";

export interface TransferenciaRpc {
  transferenciaDiarioSchema(): Promise<any>;
  transferenciaMensalSchema(): Promise<any>;
  transferenciaModeloSchema(): Promise<any>;
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

export function Transferencia(connections: Connections): TransferenciaRpc {
  const knexPlano = connections.plano;
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
    async transferenciaDiario({ inicio, fim }) {
      return nfSaidaModel.transferenciaDiario(inicio, fim);
    },

    // MENSAL
    async transferenciaMensal({ mes }) {
      return nfSaidaModel.transferenciaMensal(mes);
    },

    // MODELO
    async transferenciaModelo({ data }) {
      return nfSaidaModel.transferenciaModelo(data);
    },

    // Transfere produtos acabados da matriz para filial
    async transferenciaCreate({ controles }) {
      return nfEntradaModel.transferenciaCreate(controles);
    },
  };
}

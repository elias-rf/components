import { Connections } from "dal/connections";
import { CurrentUser, Id, Schema } from "../../../types";
import { NfSaidaModel, NfSaidaRecord } from "../model/plano/nf-saida.model";

export interface VendaRpc {
  vendaDiario(
    args: { inicio: string; fim: string; uf: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  vendaAnalitico(
    args: { inicio: string; fim: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<NfSaidaRecord[]>;
  vendaDiarioSchema(): Promise<Schema>;
  vendaAnaliticoSchema(): Promise<Schema>;
  vendaMensal(
    args: { inicio: string; fim: string; id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  vendaMensalSchema(): Promise<Schema>;
}

export function Venda(connections: Connections): VendaRpc {
  const nfSaidaModel = new NfSaidaModel(connections);

  return {
    // DIARIO
    async vendaDiario({ inicio, fim, uf }) {
      return nfSaidaModel.vendaDiario(inicio, fim, uf);
    },

    async vendaDiarioSchema() {
      return nfSaidaModel.vendaDiarioSchema();
    },
    // MENSAL
    async vendaMensal({ inicio, fim, id }) {
      return nfSaidaModel.vendaMensal(inicio, fim, id);
    },

    async vendaMensalSchema() {
      return nfSaidaModel.vendaMensalSchema();
    },

    async vendaAnaliticoSchema() {
      return nfSaidaModel.vendaAnaliticoSchema();
    },

    async vendaAnalitico({ inicio, fim }, ctx?) {
      return nfSaidaModel.vendaAnalitico(inicio, fim);
    },
  };
}

import type { Schema } from "../../../types";
import type { TConnections } from "../../dal/connections";
import { nfSaidaModel } from "./nf-saida.model";

export interface TNfSaidaRpc {
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
  const nfSaida = nfSaidaModel(connections);

  return {
    // TRANSFERENCIA DIARIO
    async transferenciaDiario(args: {
      inicio: string;
      fim: string;
    }): Promise<any[]> {
      return nfSaida.transferenciaDiario(args);
    },
    async transferenciaDiarioSchema(): Promise<Schema> {
      return nfSaida.transferenciaDiarioSchema();
    },

    // TRANSFERENCIA MENSAL
    async transferenciaMensal(args: { mes: string }): Promise<any[]> {
      return nfSaida.transferenciaMensal(args);
    },
    async transferenciaMensalSchema(): Promise<Schema> {
      return nfSaida.transferenciaMensalSchema();
    },

    // TRANSFERENCIA MODELO
    async transferenciaModelo(args: { data: string }): Promise<any[]> {
      return nfSaida.transferenciaModelo(args);
    },
    async transferenciaModeloSchema(): Promise<Schema> {
      return nfSaida.transferenciaModeloSchema();
    },

    // VENDA DIARIO
    async vendaDiario(args: {
      inicio: string;
      fim: string;
      uf: string[];
    }): Promise<any[]> {
      return nfSaida.vendaDiario(args);
    },
    async vendaDiarioSchema(): Promise<Schema> {
      return nfSaida.vendaDiarioSchema();
    },

    // VENDA MENSAL
    async vendaMensal(args: {
      inicio: string;
      fim: string;
      cliente: number;
    }): Promise<any[]> {
      return nfSaida.vendaMensal(args);
    },
    async vendaMensalSchema(): Promise<Schema> {
      return nfSaida.vendaMensalSchema();
    },
    // VENDA ANALITICO
    async vendaAnalitico(args: {
      inicio: string;
      fim: string;
    }): Promise<any[]> {
      return nfSaida.vendaAnalitico(args);
    },
    async vendaAnaliticoSchema(): Promise<Schema> {
      return nfSaida.vendaAnaliticoSchema();
    },
  };
}

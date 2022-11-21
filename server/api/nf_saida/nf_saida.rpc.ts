import type { TConnections } from "../../dal/connections";
import { nfSaidaModel } from "./nf_saida.model";

export function nfSaidaRpc(connections: TConnections) {
  const nfSaida = nfSaidaModel(connections);

  return {
    // TRANSFERENCIA DIARIO
    async transferenciaDiario({
      inicio,
      fim,
    }: {
      inicio: string;
      fim: string;
    }): Promise<any[]> {
      return nfSaida.transferenciaDiario({ inicio, fim });
    },
    async transferenciaDiarioSchema(): Promise<TFieldServer[]> {
      return nfSaida.transferenciaDiarioSchema();
    },

    // TRANSFERENCIA MENSAL
    async transferenciaMensal({ mes }: { mes: string }): Promise<any[]> {
      return nfSaida.transferenciaMensal({ mes });
    },
    async transferenciaMensalSchema(): Promise<TFieldServer[]> {
      return nfSaida.transferenciaMensalSchema();
    },

    // TRANSFERENCIA MODELO
    async transferenciaModelo({ data }: { data: string }): Promise<any[]> {
      return nfSaida.transferenciaModelo({ data });
    },
    async transferenciaModeloSchema(): Promise<TFieldServer[]> {
      return nfSaida.transferenciaModeloSchema();
    },

    // VENDA DIARIO
    async vendaDiario({
      inicio,
      fim,
      uf,
    }: {
      inicio: string;
      fim: string;
      uf: string[];
    }): Promise<any[]> {
      return nfSaida.vendaDiario({
        inicio,
        fim,
        uf,
      });
    },
    async vendaDiarioSchema(): Promise<TFieldServer[]> {
      return nfSaida.vendaDiarioSchema();
    },

    /*** VENDA MENSAL ***/
    async vendaMensal({
      inicio,
      fim,
      cliente,
    }: {
      inicio: string;
      fim: string;
      cliente: number;
    }): Promise<any[]> {
      return nfSaida.vendaMensal({ inicio, fim, cliente });
    },

    /*** VENDA MENSAL SCHEMA ***/
    async vendaMensalSchema(): Promise<TFieldServer[]> {
      return nfSaida.vendaMensalSchema();
    },

    // VENDA ANALITICO
    async vendaAnalitico({
      inicio,
      fim,
    }: {
      inicio: string;
      fim: string;
    }): Promise<any[]> {
      return nfSaida.vendaAnalitico({ inicio, fim });
    },
    async vendaAnaliticoSchema(): Promise<TFieldServer[]> {
      return nfSaida.vendaAnaliticoSchema();
    },
  };
}

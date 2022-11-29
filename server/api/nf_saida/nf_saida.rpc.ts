import { TConnections, TFieldClient } from "../../../types";
import { nfSaidaModel } from "./nf_saida.model";

export function nfSaidaRpc(connections: TConnections) {
  const nfSaida = nfSaidaModel(connections);

  return {
    query: {
      // TRANSFERENCIA DIARIO
      async nfSaidaTransferenciaDiario({
        inicio,
        fim,
      }: {
        inicio: string;
        fim: string;
      }): Promise<any[]> {
        return nfSaida.nfSaidaTransferenciaDiario({ inicio, fim });
      },
      async nfSaidaTransferenciaDiarioSchema(): Promise<TFieldClient[]> {
        return nfSaida.nfSaidaTransferenciaDiarioSchema();
      },

      // TRANSFERENCIA MENSAL
      async nfSaidaTransferenciaMensal({
        mes,
      }: {
        mes: string;
      }): Promise<any[]> {
        return nfSaida.nfSaidaTransferenciaMensal({ mes });
      },
      async nfSaidaTransferenciaMensalSchema(): Promise<TFieldClient[]> {
        return nfSaida.nfSaidaTransferenciaMensalSchema();
      },

      // TRANSFERENCIA MODELO
      async nfSaidaTransferenciaModelo({
        data,
      }: {
        data: string;
      }): Promise<any[]> {
        return nfSaida.nfSaidaTransferenciaModelo({ data });
      },
      async transferenciaModeloSchema(): Promise<TFieldClient[]> {
        return nfSaida.nfSaidaTransferenciaModeloSchema();
      },

      // VENDA DIARIO
      async nfSaidaVendaDiario({
        inicio,
        fim,
        uf,
      }: {
        inicio: string;
        fim: string;
        uf: string[];
      }): Promise<any[]> {
        return nfSaida.nfSaidaVendaDiario({
          inicio,
          fim,
          uf,
        });
      },
      async nfSaidaVendaDiarioSchema(): Promise<TFieldClient[]> {
        return nfSaida.nfSaidaVendaDiarioSchema();
      },

      /*** VENDA MENSAL ***/
      async nfSaidaVendaMensal({
        inicio,
        fim,
        cliente,
      }: {
        inicio: string;
        fim: string;
        cliente: number;
      }): Promise<any[]> {
        return nfSaida.nfSaidaVendaMensal({ inicio, fim, cliente });
      },

      /*** VENDA MENSAL SCHEMA ***/
      async nfSaidaVendaMensalSchema(): Promise<TFieldClient[]> {
        return nfSaida.nfSaidaVendaMensalSchema();
      },

      // VENDA ANALITICO
      async nfSaidaVendaAnalitico({
        inicio,
        fim,
      }: {
        inicio: string;
        fim: string;
      }): Promise<any[]> {
        return nfSaida.nfSaidaVendaAnalitico({ inicio, fim });
      },

      // VENDA ANALITICO SCHEMA
      async nfSaidaVendaAnaliticoSchema(): Promise<TFieldClient[]> {
        return nfSaida.nfSaidaVendaAnaliticoSchema();
      },

      // TRANSFERENCIA MODELO SCHEMA
      async nfSaidaTransferenciaModeloSchema(): Promise<TFieldClient[]> {
        return nfSaida.nfSaidaTransferenciaModeloSchema();
      },
    },
  };
}

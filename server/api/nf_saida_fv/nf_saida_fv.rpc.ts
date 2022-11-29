import { TConnections, TFieldClient } from "../../../types";
import { nfSaidaFvModel } from "./nf_saida_fv.model";

export type TNfSaidaFvRpc = ReturnType<typeof nfSaidaFvRpc>;

export function nfSaidaFvRpc(connections: TConnections) {
  const nfSaidaFv = nfSaidaFvModel(connections);

  return {
    query: {
      // VENDA DIARIO
      async nfSaidaFvVendaFvDiario({
        inicio,
        fim,
        uf,
      }: {
        inicio: string;
        fim: string;
        uf: string[];
      }): Promise<any[]> {
        return nfSaidaFv.nfSaidaFvVendaDiario({
          inicio,
          fim,
          uf,
        });
      },

      async nfSaidaFvVendaFvDiarioSchema(): Promise<TFieldClient[]> {
        return nfSaidaFv.nfSaidaFvVendaDiarioSchema();
      },

      // VENDA MENSAL
      async nfSaidaFvVendaFvMensal({
        inicio,
        fim,
        cliente_id,
      }: {
        inicio: string;
        fim: string;
        cliente_id: number;
      }): Promise<any[]> {
        return nfSaidaFv.nfSaidaFvVendaMensal({
          inicio,
          fim,
          cliente_id,
        });
      },

      async nfSaidaFvVendaFvMensalSchema(): Promise<TFieldClient[]> {
        return nfSaidaFv.nfSaidaFvVendaMensalSchema();
      },

      // VENDA ANALITICO
      async nfSaidaFvVendaFvAnalitico({
        inicio,
        fim,
      }: {
        inicio: string;
        fim: string;
      }): Promise<any[]> {
        return nfSaidaFv.nfSaidaFvVendaAnalitico({ inicio, fim });
      },

      async nfSaidaFvVendaFvAnaliticoSchema(): Promise<TFieldClient[]> {
        return nfSaidaFv.nfSaidaFvVendaAnaliticoSchema();
      },
    },
  };
}

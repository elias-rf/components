import type { TConnections } from "../../dal/connections";
import { nfSaidaFvModel } from "./nf_saida_fv.model";

export type TNfSaidaFvRpc = ReturnType<typeof nfSaidaFvRpc>;

export function nfSaidaFvRpc(connections: TConnections) {
  const nfSaidaFv = nfSaidaFvModel(connections);

  return {
    // VENDA DIARIO
    async vendaFvDiario({
      inicio,
      fim,
      uf,
    }: {
      inicio: string;
      fim: string;
      uf: string[];
    }): Promise<any[]> {
      return nfSaidaFv.vendaDiario({
        inicio,
        fim,
        uf,
      });
    },
    async vendaFvDiarioSchema(): Promise<TFieldServer[]> {
      return nfSaidaFv.vendaDiarioSchema();
    },

    // VENDA MENSAL
    async vendaFvMensal({
      inicio,
      fim,
      cliente_id,
    }: {
      inicio: string;
      fim: string;
      cliente_id: number;
    }): Promise<any[]> {
      return nfSaidaFv.vendaMensal({
        inicio,
        fim,
        cliente_id,
      });
    },
    async vendaFvMensalSchema(): Promise<TFieldServer[]> {
      return nfSaidaFv.vendaMensalSchema();
    },
    // VENDA ANALITICO
    async vendaFvAnalitico({
      inicio,
      fim,
    }: {
      inicio: string;
      fim: string;
    }): Promise<any[]> {
      return nfSaidaFv.vendaAnalitico({ inicio, fim });
    },
    async vendaFvAnaliticoSchema(): Promise<TFieldServer[]> {
      return nfSaidaFv.vendaAnaliticoSchema();
    },
  };
}

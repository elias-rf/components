import type { Schema } from "../../../types";
import type { TConnections } from "../../dal/connections";
import { nfSaidaFvModel } from "./nf-saida-fv.model";

export type TNfSaidaFvRpc = ReturnType<typeof nfSaidaFvRpc>;

export function nfSaidaFvRpc(connections: TConnections) {
  const nfSaidaFv = nfSaidaFvModel(connections);

  return {
    // VENDA DIARIO
    async vendaFvDiario(args: {
      inicio: string;
      fim: string;
      uf: string[];
    }): Promise<any[]> {
      return nfSaidaFv.vendaDiario(args);
    },
    async vendaFvDiarioSchema(): Promise<Schema> {
      return nfSaidaFv.vendaDiarioSchema();
    },

    // VENDA MENSAL
    async vendaFvMensal(args: {
      inicio: string;
      fim: string;
      cliente_id: number;
    }): Promise<any[]> {
      return nfSaidaFv.vendaMensal(args);
    },
    async vendaFvMensalSchema(): Promise<Schema> {
      return nfSaidaFv.vendaMensalSchema();
    },
    // VENDA ANALITICO
    async vendaFvAnalitico(args: {
      inicio: string;
      fim: string;
    }): Promise<any[]> {
      return nfSaidaFv.vendaAnalitico(args);
    },
    async vendaFvAnaliticoSchema(): Promise<Schema> {
      return nfSaidaFv.vendaAnaliticoSchema();
    },
  };
}

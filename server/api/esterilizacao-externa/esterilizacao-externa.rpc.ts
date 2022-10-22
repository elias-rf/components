import type { Schema } from "../../../types";
import { TConnections } from "../../dal/connections";
import { esterilizacaoExternaModel } from "./esterilizacao-externa.model";

export type TEsterilizacaoExternaRpc = ReturnType<
  typeof esterilizacaoExternaRpc
>;

export function esterilizacaoExternaRpc(connections: TConnections) {
  const esterilizacaoExterna = esterilizacaoExternaModel(connections);
  return {
    // SCHEMA DIARIO
    async esterilizacaoExternaSchemaDiario(): Promise<Schema> {
      return esterilizacaoExterna.schemaDiario();
    },

    // SCHEMA MENSAL
    async esterilizacaoExternaSchemaMensal(): Promise<Schema> {
      return esterilizacaoExterna.schemaMensal();
    },

    // SCHEMA PRODUTO
    async esterilizacaoExternaSchemaProduto(): Promise<Schema> {
      return esterilizacaoExterna.schemaProduto();
    },

    // SCHEMA MODELO
    async esterilizacaoExternaSchemaModelo(): Promise<Schema> {
      return esterilizacaoExterna.schemaModelo();
    },

    // DIARIO
    async esterilizacaoExternaDiario(args: {
      inicio: string;
      fim: string;
    }): Promise<any[]> {
      return esterilizacaoExterna.diario(args);
    },

    // MENSAL
    async esterilizacaoExternaMensal(args: { mes: string }): Promise<any[]> {
      return esterilizacaoExterna.mensal(args);
    },

    // MODELO
    async esterilizacaoExternaModelo(args: {
      data: string;
      produto: string;
    }): Promise<any[]> {
      return esterilizacaoExterna.modelo(args);
    },

    // PRODUTO
    async esterilizacaoExternaProduto(args: { data: string }): Promise<any[]> {
      return esterilizacaoExterna.produto(args);
    },
  };
}

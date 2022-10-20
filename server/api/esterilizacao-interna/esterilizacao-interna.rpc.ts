import type { Schema } from "../../../types";
import { TConnections } from "../../dal/connections";
import { esterilizacaoInternaModel } from "../esterilizacao-interna/esterilizacao-interna.model";

export function esterilizacaoInternaRpc(connections: TConnections) {
  const esterilizacaoInterna = esterilizacaoInternaModel(connections);

  return {
    // SCHEMA DIARIO
    async esterilizacaoInternaSchemaDiario(): Promise<Schema> {
      return esterilizacaoInterna.schemaDiario();
    },

    // SCHEMA MENSAL
    async esterilizacaoInternaSchemaMensal(): Promise<Schema> {
      return esterilizacaoInterna.schemaMensal();
    },

    // SCHEMA PRODUTO
    async esterilizacaoInternaSchemaProduto(): Promise<Schema> {
      return esterilizacaoInterna.schemaProduto();
    },

    // SCHEMA MODELO
    async esterilizacaoInternaSchemaModelo(): Promise<Schema> {
      return esterilizacaoInterna.schemaModelo();
    },

    // DIARIO
    async esterilizacaoInternaDiario(args: {
      inicio: string;
      fim: string;
    }): Promise<{ dia: string; quantidade: number }[]> {
      return esterilizacaoInterna.diario(args);
    },

    // MENSAL
    async esterilizacaoInternaMensal(args: {
      mes: string;
    }): Promise<{ mes: string; quantidade: number }[]> {
      return esterilizacaoInterna.mensal(args);
    },

    // MODELO
    async esterilizacaoInternaModelo(args: {
      data: string;
      produto: string;
    }): Promise<{ modelo: string; quantidade: number }[]> {
      return esterilizacaoInterna.modelo(args);
    },

    // PRODUTO
    async esterilizacaoInternaProduto(args: {
      data: string;
    }): Promise<{ produto: string; quantidade: number }[]> {
      return esterilizacaoInterna.produto(args);
    },
  };
}

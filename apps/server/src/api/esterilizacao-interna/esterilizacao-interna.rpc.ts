import type { RpcContext, Schema } from "@er/types";
import { TConnections } from "dal/connections";
import { EsterilizacaoInternaModel } from "../esterilizacao-interna/esterilizacao-interna.model";

export interface TEsterilizacaoInternaRpc {
  esterilizacaoInternaSchemaDiario: () => Promise<Schema>;
  esterilizacaoInternaSchemaMensal: () => Promise<Schema>;
  esterilizacaoInternaSchemaProduto: () => Promise<Schema>;
  esterilizacaoInternaSchemaModelo: () => Promise<Schema>;
  esterilizacaoInternaDiario: (
    args: { inicio: string; fim: string },
    ctx?: RpcContext
  ) => Promise<{ dia: string; quantidade: number }[]>;
  esterilizacaoInternaMensal: (
    args: { mes: string },
    ctx?: RpcContext
  ) => Promise<{ mes: string; quantidade: number }[]>;
  esterilizacaoInternaProduto: (
    args: { data: string },
    ctx?: RpcContext
  ) => Promise<{ produto: string; quantidade: number }[]>;
  esterilizacaoInternaModelo: (
    args: { data: string; produto: string },
    ctx?: RpcContext
  ) => Promise<{ modelo: string; quantidade: number }[]>;
}

export function esterilizacaoInternaRpc(
  connections: TConnections
): TEsterilizacaoInternaRpc {
  const esterilizacaoInterna = new EsterilizacaoInternaModel(connections);
  return {
    // SCHEMA DIARIO
    async esterilizacaoInternaSchemaDiario() {
      return esterilizacaoInterna.schemaDiario();
    },

    // SCHEMA MENSAL
    async esterilizacaoInternaSchemaMensal() {
      return esterilizacaoInterna.schemaMensal();
    },

    // SCHEMA PRODUTO
    async esterilizacaoInternaSchemaProduto() {
      return esterilizacaoInterna.schemaProduto();
    },

    // SCHEMA MODELO
    async esterilizacaoInternaSchemaModelo() {
      return esterilizacaoInterna.schemaModelo();
    },

    // DIARIO
    async esterilizacaoInternaDiario({ inicio, fim }) {
      return esterilizacaoInterna.diario(inicio, fim);
    },

    // MENSAL
    async esterilizacaoInternaMensal({ mes }) {
      return esterilizacaoInterna.mensal(mes);
    },

    // MODELO
    async esterilizacaoInternaModelo({ data, produto }) {
      return esterilizacaoInterna.modelo(data, produto);
    },

    // PRODUTO
    async esterilizacaoInternaProduto({ data }) {
      return esterilizacaoInterna.produto(data);
    },
  };
}

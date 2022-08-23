import type { RpcContext, Schema } from "@er/types";
import { TConnections } from "../dal/connections";
import { EsterilizacaoExternaModel } from "../model";

export interface TEsterilizacaoExternaRpc {
  esterilizacaoExternaSchemaDiario: () => Promise<Schema>;
  esterilizacaoExternaSchemaMensal: () => Promise<Schema>;
  esterilizacaoExternaSchemaProduto: () => Promise<Schema>;
  esterilizacaoExternaSchemaModelo: () => Promise<Schema>;
  esterilizacaoExternaDiario: (
    args: { inicio: string; fim: string },
    ctx?: RpcContext
  ) => Promise<{ dia: string; quantidade: number }[]>;
  esterilizacaoExternaMensal: (
    args: { mes: string },
    ctx?: RpcContext
  ) => Promise<{ mes: string; quantidade: number }[]>;
  esterilizacaoExternaProduto: (
    args: { data: string },
    ctx?: RpcContext
  ) => Promise<{ produto: string; quantidade: number }[]>;
  esterilizacaoExternaModelo: (
    args: { data: string; produto: string },
    ctx?: RpcContext
  ) => Promise<{ modelo: string; quantidade: number }[]>;
}

export function esterilizacaoExternaRpc(
  connections: TConnections
): TEsterilizacaoExternaRpc {
  const esterilizacaoExterna = new EsterilizacaoExternaModel(connections);
  return {
    // SCHEMA DIARIO
    async esterilizacaoExternaSchemaDiario() {
      return esterilizacaoExterna.schemaDiario();
    },

    // SCHEMA MENSAL
    async esterilizacaoExternaSchemaMensal() {
      return esterilizacaoExterna.schemaMensal();
    },

    // SCHEMA PRODUTO
    async esterilizacaoExternaSchemaProduto() {
      return esterilizacaoExterna.schemaProduto();
    },

    // SCHEMA MODELO
    async esterilizacaoExternaSchemaModelo() {
      return esterilizacaoExterna.schemaModelo();
    },

    // DIARIO
    async esterilizacaoExternaDiario({ inicio, fim }) {
      return esterilizacaoExterna.diario(inicio, fim);
    },

    // MENSAL
    async esterilizacaoExternaMensal({ mes }: { mes: string }) {
      return esterilizacaoExterna.mensal(mes);
    },

    // MODELO
    async esterilizacaoExternaModelo({ data, produto }) {
      return esterilizacaoExterna.modelo(data, produto);
    },

    // PRODUTO
    async esterilizacaoExternaProduto({ data }) {
      return esterilizacaoExterna.produto(data);
    },
  };
}

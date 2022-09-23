import { RpcContext, Schema } from "@er/types";
import { TConnections } from "../../dal/connections";
import { OperacaoProducaoModel } from "../operacao-producao/operacao-producao.model";

export interface TOperacaoProducaoRpc {
  operacaoDiarioSchema: () => Promise<Schema>;
  operacaoMensalSchema: () => Promise<Schema>;
  operacaoProdutoSchema: () => Promise<Schema>;
  operacaoTurnoSchema: () => Promise<Schema>;
  operacaoDiario: (
    args: { operacao: string; inicio: string; fim: string },
    ctx?: RpcContext
  ) => Promise<{ dia: string; quantidade: number }[]>;
  operacaoMensal: (
    args: { operacao: string; mes: string },
    ctx?: RpcContext
  ) => Promise<{ mes: string; quantidade: number }[]>;
  operacaoProduto: (
    args: { operacao: string; data: string },
    ctx?: RpcContext
  ) => Promise<{ produto: string; quantidade: number }[]>;
  operacaoTurno: (
    args: { operacao: string; data: string },
    ctx?: RpcContext
  ) => Promise<{ produto: string; quantidade: number }[]>;
  operacaoModelo: (
    args: { operacao: string; data: string; produto: string },
    ctx?: RpcContext
  ) => Promise<{ modelo: string; quantidade: number }[]>;
}

export function operacaoProducaoRpc(
  connections: TConnections
): TOperacaoProducaoRpc {
  const operacaoProducao = new OperacaoProducaoModel(connections);

  return {
    // DIARIO
    async operacaoDiario(args) {
      return operacaoProducao.diario(args);
    },

    // MENSAL
    async operacaoMensal(args) {
      return operacaoProducao.mensal(args);
    },

    // MODELO
    async operacaoModelo(args) {
      return operacaoProducao.modelo(args);
    },

    // PRODUTO
    async operacaoProduto(args) {
      return operacaoProducao.produto(args);
    },

    // TURNO
    async operacaoTurno(args) {
      return operacaoProducao.turno(args);
    },

    async operacaoTurnoSchema() {
      return operacaoProducao.turnoSchema();
    },

    async operacaoProdutoSchema() {
      return operacaoProducao.produtoSchema();
    },

    async operacaoMensalSchema() {
      return operacaoProducao.mensalSchema();
    },

    async operacaoDiarioSchema() {
      return operacaoProducao.diarioSchema();
    },
  };
}

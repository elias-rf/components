import { RpcContext, Schema } from "@er/types";
import { Connections } from "dal/connections";
import { OperacaoProducaoModel } from "../model/oftalmo/operacao-producao.model";

export interface OperacaoRpc {
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

export function OperacaoProducao(connections: Connections): OperacaoRpc {
  const operacaoProducao = new OperacaoProducaoModel(connections);

  return {
    // DIARIO
    async operacaoDiario({ operacao, inicio, fim }) {
      return operacaoProducao.diario(operacao, inicio, fim);
    },

    // MENSAL
    async operacaoMensal({ operacao, mes }) {
      return operacaoProducao.mensal(operacao, mes);
    },

    // MODELO
    async operacaoModelo({ data, operacao, produto }) {
      return operacaoProducao.modelo(data, operacao, produto);
    },

    // PRODUTO
    async operacaoProduto({ operacao, data }) {
      return operacaoProducao.produto(operacao, data);
    },

    // TURNO
    async operacaoTurno({ operacao, data }) {
      return operacaoProducao.turno(operacao, data);
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

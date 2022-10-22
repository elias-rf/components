import { Schema } from "../../../types";
import { TConnections } from "../../dal/connections";
import { OperacaoProducaoModel } from "../operacao-producao/operacao-producao.model";

export type TOperacaoProducaoRpc = ReturnType<typeof operacaoProducaoRpc>;

export function operacaoProducaoRpc(connections: TConnections) {
  const operacaoProducao = new OperacaoProducaoModel(connections);

  return {
    // DIARIO
    async operacaoDiario(args: {
      operacao: string;
      inicio: string;
      fim: string;
    }): Promise<{ dia: string; quantidade: number }[]> {
      return operacaoProducao.diario(args);
    },

    // MENSAL
    async operacaoMensal(args: {
      operacao: string;
      mes: string;
    }): Promise<{ mes: string; quantidade: number }[]> {
      return operacaoProducao.mensal(args);
    },

    // MODELO
    async operacaoModelo(args: {
      operacao: string;
      data: string;
      produto: string;
    }): Promise<{ modelo: string; quantidade: number }[]> {
      return operacaoProducao.modelo(args);
    },

    // PRODUTO
    async operacaoProduto(args: {
      operacao: string;
      data: string;
    }): Promise<{ produto: string; quantidade: number }[]> {
      return operacaoProducao.produto(args);
    },

    // TURNO
    async operacaoTurno(args: {
      operacao: string;
      data: string;
    }): Promise<{ produto: string; quantidade: number }[]> {
      return operacaoProducao.turno(args);
    },

    async operacaoTurnoSchema(): Promise<Schema> {
      return operacaoProducao.turnoSchema();
    },

    async operacaoProdutoSchema(): Promise<Schema> {
      return operacaoProducao.produtoSchema();
    },

    async operacaoMensalSchema(): Promise<Schema> {
      return operacaoProducao.mensalSchema();
    },

    async operacaoDiarioSchema(): Promise<Schema> {
      return operacaoProducao.diarioSchema();
    },
  };
}

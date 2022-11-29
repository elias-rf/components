import { TConnections, TFieldClient } from "../../../types";
import { operacaoProducaoModel } from "./operacao_producao.model";

export type TOperacaoProducaoRpc = ReturnType<typeof operacaoProducaoRpc>;

export function operacaoProducaoRpc(connections: TConnections) {
  const operacaoProducao = operacaoProducaoModel(connections);

  return {
    query: {
      // DIARIO
      // prettier-ignore
      async operacaoDiario({ operacao, inicio, fim }: {
      operacao: string;
      inicio: string;
      fim: string;
    }): Promise<{ dia: string; quantidade: number }[]> {
      return operacaoProducao.diario({ operacao, inicio, fim });
    },

      // MENSAL
      // prettier-ignore
      async operacaoMensal({ operacao, mes }: {
      operacao: string;
      mes: string;
    }): Promise<{ mes: string; quantidade: number }[]> {
      return operacaoProducao.mensal({ operacao, mes });
    },

      // MODELO
      // prettier-ignore
      async operacaoModelo({ operacao, data, produto }: {
      operacao: string;
      data: string;
      produto: string;
    }): Promise<{ modelo: string; quantidade: number }[]> {
      return operacaoProducao.modelo({ operacao, data, produto });
    },

      // PRODUTO
      // prettier-ignore
      async operacaoProduto({ operacao, data }: {
      operacao: string;
      data: string;
    }): Promise<{ produto: string; quantidade: number }[]> {
      return operacaoProducao.produto({ operacao, data });
    },

      // TURNO
      // prettier-ignore
      async operacaoTurno({ operacao, data }: {
      operacao: string;
      data: string;
    }): Promise<{ produto: string; quantidade: number }[]> {
      return operacaoProducao.turno({ operacao, data });
    },

      async operacaoTurnoSchema(): Promise<TFieldClient[]> {
        return operacaoProducao.turnoSchema();
      },

      async operacaoProdutoSchema(): Promise<TFieldClient[]> {
        return operacaoProducao.produtoSchema();
      },

      async operacaoMensalSchema(): Promise<TFieldClient[]> {
        return operacaoProducao.mensalSchema();
      },

      async operacaoDiarioSchema(): Promise<TFieldClient[]> {
        return operacaoProducao.diarioSchema();
      },
    },
  };
}

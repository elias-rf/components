import { TConnections, TFieldClient } from "../../../types";
import { esterilizacaoInternaModel } from "./esterilizacao_interna.model";

export type TEsterilizacaoInternaRpc = ReturnType<
  typeof esterilizacaoInternaRpc
>;

export function esterilizacaoInternaRpc(connections: TConnections) {
  const esterilizacaoInterna = esterilizacaoInternaModel(connections);

  return {
    query: {
      // SCHEMA DIARIO
      async esterilizacaoInternaSchemaDiario(): Promise<TFieldClient[]> {
        return esterilizacaoInterna.schemaDiario();
      },

      // SCHEMA MENSAL
      async esterilizacaoInternaSchemaMensal(): Promise<TFieldClient[]> {
        return esterilizacaoInterna.schemaMensal();
      },

      // SCHEMA PRODUTO
      async esterilizacaoInternaSchemaProduto(): Promise<TFieldClient[]> {
        return esterilizacaoInterna.schemaProduto();
      },

      // SCHEMA MODELO
      async esterilizacaoInternaSchemaModelo(): Promise<TFieldClient[]> {
        return esterilizacaoInterna.schemaModelo();
      },

      // DIARIO
      async esterilizacaoInternaDiario({
        inicio,
        fim,
      }: {
        inicio: string;
        fim: string;
      }): Promise<{ dia: string; quantidade: number }[]> {
        return esterilizacaoInterna.diario({ inicio, fim });
      },

      // MENSAL
      async esterilizacaoInternaMensal({
        mes,
      }: {
        mes: string;
      }): Promise<{ mes: string; quantidade: number }[]> {
        return esterilizacaoInterna.mensal({ mes });
      },

      // MODELO
      async esterilizacaoInternaModelo({
        data,
        produto,
      }: {
        data: string;
        produto: string;
      }): Promise<{ modelo: string; quantidade: number }[]> {
        return esterilizacaoInterna.modelo({ data, produto });
      },

      // PRODUTO
      async esterilizacaoInternaProduto({
        data,
      }: {
        data: string;
      }): Promise<{ produto: string; quantidade: number }[]> {
        return esterilizacaoInterna.produto({ data });
      },
    },
  };
}

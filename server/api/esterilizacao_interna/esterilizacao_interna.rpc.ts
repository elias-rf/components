import { TConnections } from "../../dal/connections";
import { esterilizacaoInternaModel } from "./esterilizacao_interna.model";

export type TEsterilizacaoInternaRpc = ReturnType<
  typeof esterilizacaoInternaRpc
>;

export function esterilizacaoInternaRpc(connections: TConnections) {
  const esterilizacaoInterna = esterilizacaoInternaModel(connections);

  return {
    // SCHEMA DIARIO
    async esterilizacaoInternaSchemaDiario(): Promise<TFieldServer[]> {
      return esterilizacaoInterna.schemaDiario();
    },

    // SCHEMA MENSAL
    async esterilizacaoInternaSchemaMensal(): Promise<TFieldServer[]> {
      return esterilizacaoInterna.schemaMensal();
    },

    // SCHEMA PRODUTO
    async esterilizacaoInternaSchemaProduto(): Promise<TFieldServer[]> {
      return esterilizacaoInterna.schemaProduto();
    },

    // SCHEMA MODELO
    async esterilizacaoInternaSchemaModelo(): Promise<TFieldServer[]> {
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
  };
}

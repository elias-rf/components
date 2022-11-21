import { TConnections } from "../../dal/connections";
import { esterilizacaoExternaModel } from "./esterilizacao_externa.model";

export type TEsterilizacaoExternaRpc = ReturnType<
  typeof esterilizacaoExternaRpc
>;

export function esterilizacaoExternaRpc(connections: TConnections) {
  const esterilizacaoExterna = esterilizacaoExternaModel(connections);
  return {
    // SCHEMA DIARIO
    async esterilizacaoExternaSchemaDiario(): Promise<TFieldServer[]> {
      return esterilizacaoExterna.schemaDiario();
    },

    // SCHEMA MENSAL
    async esterilizacaoExternaSchemaMensal(): Promise<TFieldServer[]> {
      return esterilizacaoExterna.schemaMensal();
    },

    // SCHEMA PRODUTO
    async esterilizacaoExternaSchemaProduto(): Promise<TFieldServer[]> {
      return esterilizacaoExterna.schemaProduto();
    },

    // SCHEMA MODELO
    async esterilizacaoExternaSchemaModelo(): Promise<TFieldServer[]> {
      return esterilizacaoExterna.schemaModelo();
    },

    // DIARIO
    async esterilizacaoExternaDiario({
      inicio,
      fim,
    }: {
      inicio: string;
      fim: string;
    }): Promise<any[]> {
      return esterilizacaoExterna.diario({ inicio, fim });
    },

    // MENSAL
    async esterilizacaoExternaMensal({ mes }: { mes: string }): Promise<any[]> {
      return esterilizacaoExterna.mensal({ mes });
    },

    // MODELO
    async esterilizacaoExternaModelo({
      data,
      produto,
    }: {
      data: string;
      produto: string;
    }): Promise<any[]> {
      return esterilizacaoExterna.modelo({ data, produto });
    },

    // PRODUTO
    async esterilizacaoExternaProduto({
      data,
    }: {
      data: string;
    }): Promise<any[]> {
      return esterilizacaoExterna.produto({ data });
    },
  };
}

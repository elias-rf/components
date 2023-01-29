import { TEsterilizacaoInternaRpc } from "../../types/esterilizacao-interna.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { isEmpty } from "../../utils/identify/is_empty";
import { deepmerge } from "../../utils/object/deepmerge";
import { day } from "../lib/day";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "esterilizacaoInterna";

export const esterilizacaoInternaService: TEsterilizacaoInternaRpc = deepmerge(
  rpcFactory<TEsterilizacaoInternaRpc>(SERVICE),
  {
    query: {
      schemaDiario() {
        return fetcherRpc.query("esterilizacaoInternaSchemaDiario");
      },

      async diario(args): Promise<any[]> {
        if (isEmpty(args.inicio) || isEmpty(args.fim)) {
          return [];
        }
        const response = await fetcherRpc.query(
          "esterilizacaoInternaDiario",
          args
        );
        return response.map((item: any) => {
          item.diaSemana = day.utc(item.dia).format("ddd");
          item.dia = day.utc(item.dia).format("YYYY-MM-DD");
          return item;
        });
      },

      schemaMensal() {
        return fetcherRpc.query("esterilizacaoInternaSchemaMensal");
      },

      async mensal(args): Promise<any[]> {
        if (isEmpty(args.mes)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoInternaMensal", args);
      },

      schemaProduto() {
        return fetcherRpc.query("esterilizacaoInternaSchemaProduto");
      },

      async produto(args): Promise<any[]> {
        if (isEmpty(args.data)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoInternaProduto", args);
      },

      schemaModelo() {
        return fetcherRpc.query("esterilizacaoInternaSchemaModelo");
      },

      async modelo(args) {
        if (isEmpty(args.data)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoInternaModelo", args);
      },
    },
  } as TEsterilizacaoInternaRpc
);

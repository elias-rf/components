import { TFieldClient } from "../../types";
import { TEsterilizacaoExternaRpc } from "../../types/esterilizacao-externa.type";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
import { isEmpty } from "../../utils/identify/is_empty";
import { deepmerge } from "../../utils/object/deepmerge";
import { day } from "../lib/day";
import { rpcFactory } from "../lib/http/rpc.factory";

const SERVICE = "esterilizacaoExterna";

export const esterilizacaoExternaService: TEsterilizacaoExternaRpc = deepmerge(
  rpcFactory<TEsterilizacaoExternaRpc>(SERVICE),
  {
    query: {
      schemaDiario(): Promise<TFieldClient[]> {
        return cache.fetch({
          key: `${SERVICE}SchemaDiario`,
          callback: fetcherRpc.query,
          args: [`${SERVICE}SchemaDiario`],
          expiresInSeconds: 3600,
          debug: true,
        });
      },

      async diario(args): Promise<any[]> {
        if (isEmpty(args.inicio) || isEmpty(args.fim)) {
          return [];
        }
        const response = await fetcherRpc.query(
          "esterilizacaoExternaDiario",
          args
        );
        return response.map((item: any) => {
          item.diaSemana = day.utc(item.dia).format("ddd");
          item.dia = day.utc(item.dia).format("YYYY-MM-DD");
          return item;
        });
      },

      async schemaMensal(): Promise<TFieldClient[]> {
        return fetcherRpc.query("esterilizacaoExternaSchemaMensal");
      },

      async mensal(args): Promise<any[]> {
        if (isEmpty(args.mes)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoExternaMensal", args);
      },

      async schemaProduto(): Promise<TFieldClient[]> {
        return fetcherRpc.query("esterilizacaoExternaSchemaProduto");
      },

      async produto(args): Promise<any[]> {
        if (isEmpty(args.data)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoExternaProduto", args);
      },

      async schemaModelo(): Promise<TFieldClient[]> {
        return fetcherRpc.query("esterilizacaoExternaSchemaModelo");
      },

      async modelo(args): Promise<any[]> {
        if (isEmpty(args.data) || isEmpty(args.produto)) {
          return [];
        }
        return cache.fetch({
          key: `${SERVICE}Modelo`,
          callback: fetcherRpc.query,
          args: [`${SERVICE}Modelo`, args],
          expiresInSeconds: 3600,
        });
      },
    },
  } as TEsterilizacaoExternaRpc
);

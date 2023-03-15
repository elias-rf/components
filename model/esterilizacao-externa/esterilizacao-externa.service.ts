import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";

import { TField } from "../../types/model";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { day } from "../../utils/date/day";
import { isEmpty } from "../../utils/identify/is_empty";
import { TEsterilizacaoExternaRpc } from "./esterilizacao-externa.type";

export const esterilizacaoExternaService = deepmerge(
  rpcFactory("esterilizacaoExterna"),
  {
    //#region service
    query: {
      schemaDiario() {
        return fetcherRpc.query("esterilizacaoExternaSchemaDiario");
      },

      async diario(args) {
        if (isEmpty(args.inicio) || isEmpty(args.fim)) {
          return [];
        }
        const response = await fetcherRpc.query(
          "esterilizacaoExternaDiario",
          args
        );
        return response.map((item: any) => {
          // item.dia_semana = day.utc(item.dia).format("ddd");
          item.dia = day.utc(item.dia).format("YYYY-MM-DD");
          return item;
        });
      },

      async schemaMensal(): Promise<TField[]> {
        return fetcherRpc.query("esterilizacaoExternaSchemaMensal");
      },

      async mensal(args): Promise<any[]> {
        if (isEmpty(args.mes)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoExternaMensal", args);
      },

      async schemaProduto(): Promise<TField[]> {
        return fetcherRpc.query("esterilizacaoExternaSchemaProduto");
      },

      async produto(args): Promise<any[]> {
        if (isEmpty(args.data)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoExternaProduto", args);
      },

      async schemaModelo(): Promise<TField[]> {
        return fetcherRpc.query("esterilizacaoExternaSchemaModelo");
      },

      async modelo(args): Promise<any[]> {
        if (isEmpty(args.data) || isEmpty(args.produto)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoExternaModelo", args);
      },
    },
  } as TEsterilizacaoExternaRpc
);

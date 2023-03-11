import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TEsterilizacaoInternaRpc } from "./esterilizacao-interna.type";
//#region import
import { TFieldClient } from "../../types";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { day } from "../../utils/date/day";
import { isEmpty } from "../../utils/identify/is_empty";
//#endregion

export const esterilizacaoInternaService = deepmerge(
  rpcFactory("esterilizacaoInterna"),
  {
    //#region service
    query: {
      schemaDiario() {
        return fetcherRpc.query("esterilizacaoInternaSchemaDiario");
      },

      async diario(args) {
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

      schemaMensal(): Promise<TFieldClient[]> {
        return fetcherRpc.query("esterilizacaoInternaSchemaMensal");
      },

      async mensal(args): Promise<any[]> {
        if (isEmpty(args.mes)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoInternaMensal", args);
      },

      schemaProduto(): Promise<TFieldClient[]> {
        return fetcherRpc.query("esterilizacaoInternaSchemaProduto");
      },

      async produto(args): Promise<any[]> {
        if (isEmpty(args.data)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoInternaProduto", args);
      },

      schemaModelo(): Promise<TFieldClient[]> {
        return fetcherRpc.query("esterilizacaoInternaSchemaModelo");
      },

      async modelo(args) {
        if (isEmpty(args.data)) {
          return [];
        }
        return fetcherRpc.query("esterilizacaoInternaModelo", args);
      },
    },
    //#endregion
  } as TEsterilizacaoInternaRpc
);

//#region other
//#endregion

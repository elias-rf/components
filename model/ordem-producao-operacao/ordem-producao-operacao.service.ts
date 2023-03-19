import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TOrdemProducaoOperacaoRpc } from "./ordem-producao-operacao.type";
//#region import
import { TFieldDef } from "../../types/model";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
import { isEmpty } from "../../utils/identify/is_empty";
//#endregion

export const ordemProducaoOperacaoService = deepmerge(
  rpcFactory("ordemProducaoOperacao"),
  {
    //#region service
    query: {
      async diarioSchema(): Promise<TFieldDef[]> {
        return cache.fetch({
          key: "ordemProducaoOperacaoDiarioSchema",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoDiarioSchema"],
        });
      },

      async diario(args): Promise<any[]> {
        if (
          isEmpty(args.operacao) ||
          isEmpty(args.inicio) ||
          isEmpty(args.fim)
        ) {
          return [];
        }
        return cache.fetch({
          key: "ordemProducaoOperacaoDiario",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoDiario", args],
        });
      },

      async mensalSchema(): Promise<TFieldDef[]> {
        return cache.fetch({
          key: "ordemProducaoOperacaoMensalSchema",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoMensalSchema"],
        });
      },

      async mensal(args): Promise<any[]> {
        if (isEmpty(args.operacao) || isEmpty(args.mes)) {
          return [];
        }
        return cache.fetch({
          key: "ordemProducaoOperacaoMensal",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoMensal", args],
        });
      },

      async produtoSchema(): Promise<TFieldDef[]> {
        return cache.fetch({
          key: "ordemProducaoOperacaoProdutoSchema",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoProdutoSchema"],
        });
      },

      async produto(args): Promise<any[]> {
        if (isEmpty(args.operacao) || isEmpty(args.data)) {
          return [];
        }
        return cache.fetch({
          key: "ordemProducaoOperacaoProduto",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoProduto", args],
        });
      },

      async modeloSchema(): Promise<TFieldDef[]> {
        return [
          {
            name: "modelo",
            label: "Modelo",
            primaryKey: true,
            typeField: "string",
          },
          {
            name: "quantidade",
            label: "Quantidade",
            typeField: "int",
          },
        ];
      },

      async modelo(args): Promise<any[]> {
        if (
          isEmpty(args.operacao) ||
          isEmpty(args.data) ||
          isEmpty(args.produto)
        ) {
          return [];
        }
        return cache.fetch({
          key: "ordemProducaoOperacaoModelo",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoModelo", args],
        });
      },

      async turnoSchema(): Promise<TFieldDef[]> {
        return cache.fetch({
          key: "ordemProducaoOperacaoTurnoSchema",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoTurnoSchema"],
        });
      },

      async turno(args): Promise<any[]> {
        if (isEmpty(args.operacao) || isEmpty(args.data)) {
          return [];
        }
        return cache.fetch({
          key: "ordemProducaoOperacaoTurno",
          callback: fetcherRpc.query,
          args: ["ordemProducaoOperacaoTurno", args],
        });
      },
    },
    //#endregion
  } as TOrdemProducaoOperacaoRpc
);

//#region other
//#endregion

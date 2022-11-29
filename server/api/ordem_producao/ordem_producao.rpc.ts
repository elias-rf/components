import {
  TConnections,
  TCreateArgs,
  TCurrentUser,
  TFieldClient,
  TIds,
  TListArgs,
  TReadArgs,
  TSelect,
  TUpdateArgs,
} from "../../../types";
import { TEtiquetaExterna } from "../../../types/etiqueta-externa.type";
import { TOrdemProducao } from "../../../types/ordem-producao.type";
import { TProduto } from "../../../types/produto.type";
import { TProdutoItem } from "../../../types/produto_item.type";
import { TProdutoPlano } from "../../../types/produto_plano.type";
import { isUndefined } from "../../../utils/identify/is-undefined";
import { crudModel } from "../crud/crud.model";
import { ordemProducaoModel } from "./ordem_producao.model";

export type TOrdemProducaoRpc = {
  ordemProducaoSchema(): Promise<TFieldClient[]>;
  ordemProducaoList(args: TListArgs): Promise<TOrdemProducao[]>;
  ordemProducaoRead(readArgs: TReadArgs): Promise<TOrdemProducao>;
  ordemProducaoCreate(createArgs: TCreateArgs): Promise<TOrdemProducao>;
  ordemProducaoUpdate(
    updateArgs: TUpdateArgs,
    ctx?: { currentUser: TCurrentUser }
  ): Promise<any>;
  ordemProducaoProdutoItem(
    { id, select }: { id: TIds; select?: TSelect },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<TProdutoItem>;
  ordemProducaoProdutoPlano(
    { id, select }: { id: TIds; select?: TSelect },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<TProdutoPlano>;
  ordemProducaoProduto(
    { id, select }: { id: TIds; select?: TSelect },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<TProduto>;
  ordemProducaoDataFabricacao(
    { id }: { id: TIds },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<string>;
  ordemProducaoDataValidade(
    { id }: { id: TIds },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<string>;
  ordemProducaoVersao(
    { id }: { id: TIds },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<number>;
  ordemProducaoControle(
    { id, serie }: { id: TIds; serie: string },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<string>;
  ordemProducaoFromControle(
    { controle }: { controle: string },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<string>;
  ordemProducaoControleValido(
    { controle }: { controle: string },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<boolean>;
  ordemProducaoEtiquetaExterna(
    { id }: { id: TIds },
    ctx?: { currentUser: TCurrentUser }
  ): Promise<TEtiquetaExterna[]>;
};

export function ordemProducaoRpc(connections: TConnections) {
  const ordemProducao = ordemProducaoModel(connections);
  const crud = crudModel(connections);

  return {
    query: {
      // Retorna produtoItem a partir da ordem de producao
      async ordemProducaoProdutoItem({
        id,
        select,
      }: {
        id: TIds;
        select?: TSelect;
      }) {
        return ordemProducao.produtoItem({ id, select });
      },

      // Retorna produto do plano a partir da ordem de producao
      async ordemProducaoProdutoPlano({
        id,
        select,
      }: {
        id: TIds;
        select?: TSelect;
      }) {
        return ordemProducao.produtoPlano({ id, select });
      },

      // Retorna produto do plano a partir da ordem de producao
      // prettier-ignore
      async ordemProducaoProduto({id, select}: { id: TIds; select?: TSelect }) {
      return ordemProducao.produto({ id, select });
    },

      // Retorna data de fabricacao
      // prettier-ignore
      async ordemProducaoDataFabricacao({id, }: { id: TIds }) {
      return ordemProducao.dataFabricacao({ id });
    },

      // Retorna data de validade
      // prettier-ignore
      async ordemProducaoDataValidade({id, }: { id: TIds }) {
      return ordemProducao.dataValidade({ id });
    },

      // Retorna data de validade
      // prettier-ignore
      async ordemProducaoVersao({ id }: { id: TIds }) {
      return ordemProducao.versao({ id });
    },

      // Retorna numero de controle a partir da ordem de producao e numero de serie
      // prettier-ignore
      async ordemProducaoControle({id,serie }: { id: TIds; serie: string }) {
      return ordemProducao.controle({ id, serie });
    },

      // Retorna numero de controle a partir da ordem de producao e numero de serie
      // prettier-ignore
      async ordemProducaoFromControle({controle}: { controle: string }) {
      return ordemProducao.fromControle({ controle });
    },

      // Valida se número de série é válido
      // prettier-ignore
      async ordemProducaoControleValido({controle}: { controle: string }) {
      return ordemProducao.isControleValid({ controle });
    },

      // Retorna etiquetas externas emitidas para ordem de producao
      // prettier-ignore
      async ordemProducaoEtiquetaExterna({ id }: { id: TIds }) {
      let response: TEtiquetaExterna[];
      if (isUndefined(id)) response = [];
      response = (await crud.list({
        table: "etiqueta_externa",
        where: [
          ["etiqueta_externa_id", "like", id["kOp"]?.substring(0, 6) + "%"],
        ],
        order: [["etiqueta_externa_id", "asc"]],
        limit: 200,
      })) as TEtiquetaExterna[];
      return response;
    },
    },
  };
}

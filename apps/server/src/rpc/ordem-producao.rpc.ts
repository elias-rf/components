import {
  CreateArgs,
  CurrentUser,
  Ids,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { isUndefined } from "@er/utils/src/is-undefined";
import { TConnections } from "../dal/connections";
import { EtiquetaExternaModel, TEtiquetaExterna } from "../model";
import {
  OrdemProducaoModel,
  TOrdemProducao,
} from "../model/ordem-producao.model";
import { TProdutoItem } from "../model/produto-item.model";
import { TProdutoPlano } from "../model/produto-plano.model";
import { TProduto } from "../model/produto.model";

export type TOrdemProducaoRpc = {
  ordemProducaoSchema(): Promise<Schema>;
  ordemProducaoList(
    args: ListArgs<TOrdemProducao>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TOrdemProducao[]>;
  ordemProducaoRead(
    readArgs: ReadArgs<TOrdemProducao>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TOrdemProducao>;
  ordemProducaoCreate(
    createArgs: CreateArgs<TOrdemProducao>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TOrdemProducao>;
  ordemProducaoUpdate(
    updateArgs: UpdateArgs<TOrdemProducao>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  ordemProducaoProdutoItem(
    { id, select }: { id: Ids<TOrdemProducao>; select?: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProdutoItem>;
  ordemProducaoProdutoPlano(
    { id, select }: { id: Ids<TOrdemProducao>; select?: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProdutoPlano>;
  ordemProducaoProduto(
    { id, select }: { id: Ids<TOrdemProducao>; select?: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto>;
  ordemProducaoDataFabricacao(
    { id }: { id: Ids<TOrdemProducao> },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoDataValidade(
    { id }: { id: Ids<TOrdemProducao> },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoVersao(
    { id }: { id: Ids<TOrdemProducao> },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoControle(
    { id, serie }: { id: Ids<TOrdemProducao>; serie: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoFromControle(
    { controle }: { controle: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoControleValido(
    { controle }: { controle: string },
    ctx?: { currentUser: CurrentUser }
  ): Promise<boolean>;
  ordemProducaoEtiquetaExterna(
    { id }: { id: Ids<TOrdemProducao> },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TEtiquetaExterna[]>;
};

export function ordemProducaoRpc(connections: TConnections): TOrdemProducaoRpc {
  const ordemProducaoModel = new OrdemProducaoModel(connections);
  const etiquetaExternaModel = new EtiquetaExternaModel(connections);

  return {
    async ordemProducaoSchema() {
      return ordemProducaoModel.schema();
    },

    // LIST
    ordemProducaoList(args) {
      return ordemProducaoModel.list(args);
    },

    // READ
    async ordemProducaoRead(args) {
      return ordemProducaoModel.read(args);
    },

    // CREATE
    async ordemProducaoCreate(args) {
      return ordemProducaoModel.create(args);
    },

    // UPDATE
    async ordemProducaoUpdate(args) {
      return ordemProducaoModel.update(args);
    },

    // Retorna produtoItem a partir da ordem de producao
    async ordemProducaoProdutoItem({ id, select }) {
      return ordemProducaoModel.produtoItem(id, select);
    },

    // Retorna produto do plano a partir da ordem de producao
    async ordemProducaoProdutoPlano({ id, select }) {
      return ordemProducaoModel.produtoPlano(id, select);
    },

    // Retorna produto do plano a partir da ordem de producao
    async ordemProducaoProduto({ id, select }) {
      return ordemProducaoModel.produto(id, select);
    },

    // Retorna data de fabricacao
    async ordemProducaoDataFabricacao({ id }) {
      return ordemProducaoModel.dataFabricacao(id);
    },

    // Retorna data de validade
    async ordemProducaoDataValidade({ id }) {
      return ordemProducaoModel.dataValidade(id);
    },

    // Retorna data de validade
    async ordemProducaoVersao({ id }) {
      return ordemProducaoModel.versao(id);
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async ordemProducaoControle({ id, serie }) {
      return ordemProducaoModel.controle(id, serie);
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async ordemProducaoFromControle({ controle }) {
      return ordemProducaoModel.fromControle(controle);
    },

    // Valida se número de série é válido
    async ordemProducaoControleValido({ controle }) {
      return ordemProducaoModel.isControleValid(controle);
    },

    // Retorna etiquetas externas emitidas para ordem de producao
    async ordemProducaoEtiquetaExterna({ id }) {
      if (isUndefined(id)) return [];
      return etiquetaExternaModel.list({
        where: [
          ["etiqueta_externa_id", "like", id["kOp"]?.substring(0, 6) + "%"],
        ],
        order: [["etiqueta_externa_id", "asc"]],
        limit: 200,
      });
    },
  };
}

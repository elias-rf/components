import {
  CreateArgs,
  CurrentUser,
  Id,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../dal/connections";
import { EtiquetaExternaModel } from "../model";
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
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TOrdemProducao[]>;
  ordemProducaoRead(
    readArgs: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TOrdemProducao>;
  ordemProducaoCreate(
    createArgs: CreateArgs<TOrdemProducao>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<string[]>;
  ordemProducaoUpdate(
    updateArgs: UpdateArgs<TOrdemProducao>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  ordemProducaoProdutoItem(
    { id, select }: { id: Id; select?: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProdutoItem>;
  ordemProducaoProdutoPlano(
    { id, select }: { id: Id; select?: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProdutoPlano>;
  ordemProducaoProduto(
    { id, select }: { id: Id; select?: string[] },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto>;
  ordemProducaoDataFabricacao(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoDataValidade(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoVersao(
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoControle(
    { id, serie }: { id: Id; serie: string },
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
    { id }: { id: Id },
    ctx?: { currentUser: CurrentUser }
  ): Promise<EtiquetaExternaRecord[]>;
};

export function ordemProducaoRpc(connections: TConnections): TOrdemProducaoRpc {
  const ordemProducaoModel = new OrdemProducaoModel(connections);
  const etiquetaExternaModel = new EtiquetaExternaModel(connections);

  return {
    async ordemProducaoSchema() {
      return ordemProducaoModel.schema();
    },

    // LIST
    ordemProducaoList({ where, orderBy, limit, select }) {
      return ordemProducaoModel.list(where, orderBy, limit, select);
    },

    // READ
    async ordemProducaoRead({ id, select }) {
      return ordemProducaoModel.read(id, select);
    },

    // CREATE
    async ordemProducaoCreate({ data }) {
      return ordemProducaoModel.create(data);
    },

    // UPDATE
    async ordemProducaoUpdate({ id, data }) {
      return ordemProducaoModel.update(id, data);
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

    // Valida se número de série é válido
    async ordemProducaoEtiquetaExterna({ id }) {
      return etiquetaExternaModel.list(
        [["controle", "like", id[0].substring(0, 6) + "%"]],
        [["controle", "asc"]],
        200
      );
    },
  };
}

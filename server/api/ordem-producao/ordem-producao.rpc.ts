import {
  CreateArgs,
  CurrentUser,
  Ids,
  ListArgs,
  ReadArgs,
  Schema,
  Select,
  UpdateArgs,
} from "../../../types";
import { TEtiquetaExterna } from "../../../types/etiqueta-externa.type";
import { TOrdemProducao } from "../../../types/ordem-producao.type";
import { TProdutoItem } from "../../../types/produto-item.type";
import { TProdutoPlano } from "../../../types/produto-plano.type";
import { TProduto } from "../../../types/produto.type";
import { isUndefined } from "../../../utils/is-undefined";
import { TConnections } from "../../dal/connections";
import { CrudModel } from "../crud/crud.model";
import { OrdemProducaoModel } from "./ordem-producao.model";

export type TOrdemProducaoRpc = {
  ordemProducaoSchema(): Promise<Schema>;
  ordemProducaoList(args: ListArgs): Promise<TOrdemProducao[]>;
  ordemProducaoRead(readArgs: ReadArgs): Promise<TOrdemProducao>;
  ordemProducaoCreate(createArgs: CreateArgs): Promise<TOrdemProducao>;
  ordemProducaoUpdate(
    updateArgs: UpdateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<any>;
  ordemProducaoProdutoItem(
    { id, select }: { id: Ids; select?: Select },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProdutoItem>;
  ordemProducaoProdutoPlano(
    { id, select }: { id: Ids; select?: Select },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProdutoPlano>;
  ordemProducaoProduto(
    { id, select }: { id: Ids; select?: Select },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TProduto>;
  ordemProducaoDataFabricacao(
    { id }: { id: Ids },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoDataValidade(
    { id }: { id: Ids },
    ctx?: { currentUser: CurrentUser }
  ): Promise<string>;
  ordemProducaoVersao(
    { id }: { id: Ids },
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  ordemProducaoControle(
    { id, serie }: { id: Ids; serie: string },
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
    { id }: { id: Ids },
    ctx?: { currentUser: CurrentUser }
  ): Promise<TEtiquetaExterna[]>;
};

export function ordemProducaoRpc(connections: TConnections): TOrdemProducaoRpc {
  const ordemProducaoModel = new OrdemProducaoModel(connections);
  const crud = new CrudModel(connections);

  return {
    async ordemProducaoSchema() {
      return ordemProducaoModel.schema();
    },

    // LIST
    async ordemProducaoList(args) {
      return ordemProducaoModel.list(args) as Promise<TOrdemProducao[]>;
    },

    // READ
    async ordemProducaoRead(args) {
      return ordemProducaoModel.read(args) as Promise<TOrdemProducao>;
    },

    // CREATE
    async ordemProducaoCreate(args) {
      return ordemProducaoModel.create(args) as Promise<TOrdemProducao>;
    },

    // UPDATE
    async ordemProducaoUpdate(args) {
      return ordemProducaoModel.update(args);
    },

    // Retorna produtoItem a partir da ordem de producao
    async ordemProducaoProdutoItem(args) {
      return ordemProducaoModel.produtoItem(args);
    },

    // Retorna produto do plano a partir da ordem de producao
    async ordemProducaoProdutoPlano(args) {
      return ordemProducaoModel.produtoPlano(args);
    },

    // Retorna produto do plano a partir da ordem de producao
    async ordemProducaoProduto(args) {
      return ordemProducaoModel.produto(args);
    },

    // Retorna data de fabricacao
    async ordemProducaoDataFabricacao(args) {
      return ordemProducaoModel.dataFabricacao(args);
    },

    // Retorna data de validade
    async ordemProducaoDataValidade(args) {
      return ordemProducaoModel.dataValidade(args);
    },

    // Retorna data de validade
    async ordemProducaoVersao({ id }) {
      return ordemProducaoModel.versao({ id });
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async ordemProducaoControle(args) {
      return ordemProducaoModel.controle(args);
    },

    // Retorna numero de controle a partir da ordem de producao e numero de serie
    async ordemProducaoFromControle(args) {
      return ordemProducaoModel.fromControle(args);
    },

    // Valida se número de série é válido
    async ordemProducaoControleValido(args) {
      return ordemProducaoModel.isControleValid(args);
    },

    // Retorna etiquetas externas emitidas para ordem de producao
    async ordemProducaoEtiquetaExterna({ id }) {
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
  };
}

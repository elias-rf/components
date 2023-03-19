import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import type {
  TOrdemProducao,
  TOrdemProducaoClear,
  TOrdemProducaoCreate,
  TOrdemProducaoDel,
  TOrdemProducaoList,
  TOrdemProducaoRead,
  TOrdemProducaoSchema,
  TOrdemProducaoUpdate,
} from "./ordem-producao.type";
//#region import
import { TEtiquetaExterna } from "../etiqueta-externa/etiqueta-externa.type";
import {
  TProdutoItem,
  TProdutoItemSelect,
} from "../produto-item/produto-item.type";
import {
  TProdutoPlano,
  TProdutoPlanoSelect,
} from "../produto-plano/produto-plano.type";
import { ordemProducaoService } from "./ordem-producao.service";
import type { TOrdemProducaoIds } from "./ordem-producao.type";
//#endregion

type TOrdemProducaoStore = {
  fetching: boolean;
  argsList: Parameters<TOrdemProducaoList>[0];
  refreshList: () => Promise<void>;
  dataList: TOrdemProducao[];
  getList: TOrdemProducaoList;
  dataRead: TOrdemProducao;
  getRead: TOrdemProducaoRead;
  dataSchema: TFieldDef[];
  getSchema: TOrdemProducaoSchema;
  dataClear: TOrdemProducao;
  getClear: TOrdemProducaoClear;
  setCreate: TOrdemProducaoCreate;
  setUpdate: TOrdemProducaoUpdate;
  setDel: TOrdemProducaoDel;
  //#region type
  dataProdutoItem: TProdutoItem;
  getProdutoItem: (args: {
    id: TOrdemProducaoIds;
    select?: TProdutoItemSelect;
  }) => Promise<TProdutoItem>;

  dataProdutoPlano: TProdutoPlano;
  getProdutoPlano: (args: {
    id: TOrdemProducaoIds;
    select?: TProdutoPlanoSelect;
  }) => Promise<TProdutoPlano>;

  dataDataFabricacao: string;
  getDataFabricacao: (args: { id: TOrdemProducaoIds }) => Promise<string>;

  dataDataValidade: string;
  getDataValidade: (args: { id: TOrdemProducaoIds }) => Promise<string>;

  dataControle: string;
  getControle(args: { id: TOrdemProducaoIds; serie: string }): Promise<string>;

  dataFromControle: string;
  getFromControle(args: { controle: string }): Promise<string>;

  dataEhControleValido: boolean;
  getEhControleValido(args: { controle: string }): Promise<boolean>;

  dataEtiquetaExterna: TEtiquetaExterna[];
  getEtiquetaExterna(args: {
    id: TOrdemProducaoIds;
  }): Promise<TEtiquetaExterna[]>;
  //#endregion
};

export const ordemProducaoStore = create<TOrdemProducaoStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "ordemProducaoList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await ordemProducaoService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await ordemProducaoService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await ordemProducaoService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return ordemProducaoService.mutation.create(args);
  },
  async setUpdate(args) {
    return ordemProducaoService.mutation.update(args);
  },
  async setDel(args) {
    return ordemProducaoService.mutation.del(args);
  },
  //#region store
  dataProdutoItem: {},
  async getProdutoItem(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.produtoItem(args);
    set({ dataProdutoItem: data });
    set({ fetching: false });
    return data;
  },

  dataProdutoPlano: {},
  async getProdutoPlano(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.produtoPlano(args);
    set({ dataProdutoPlano: data });
    set({ fetching: false });
    return data;
  },

  dataDataFabricacao: "",
  async getDataFabricacao(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.dataFabricacao(args);
    set({ dataDataFabricacao: data });
    set({ fetching: false });
    return data;
  },

  dataDataValidade: "",
  async getDataValidade(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.dataValidade(args);
    set({ dataDataValidade: data });
    set({ fetching: false });
    return data;
  },

  dataControle: "",
  async getControle(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.controle(args);
    set({ dataControle: data });
    set({ fetching: false });
    return data;
  },

  dataFromControle: "",
  async getFromControle(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.fromControle(args);
    set({ dataFromControle: data });
    set({ fetching: false });
    return data;
  },

  dataEhControleValido: false,
  async getEhControleValido(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.ehControleValido(args);
    set({ dataEhControleValido: data });
    set({ fetching: false });
    return data;
  },

  dataEtiquetaExterna: [],
  async getEtiquetaExterna(args) {
    set({ fetching: true });
    const data = await ordemProducaoService.query.etiquetaExterna(args);
    set({ dataEtiquetaExterna: data });
    set({ fetching: false });
    return data;
  },
  //#endregion
}));

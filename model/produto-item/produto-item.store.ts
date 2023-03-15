import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import type {
  TProdutoItem,
  TProdutoItemClear,
  TProdutoItemCreate,
  TProdutoItemDel,
  TProdutoItemList,
  TProdutoItemRead,
  TProdutoItemSchema,
  TProdutoItemUpdate,
} from "./produto-item.type";
//#region import
import { TSelect } from "../../types";
import {
  TProdutoPlano,
  TProdutoPlanoFields,
} from "../produto-plano/produto-plano.type";
import { produtoItemService } from "./produto-item.service";
import { TProdutoItemIds } from "./produto-item.type";

//#endregion

type TProdutoItemStore = {
  fetching: boolean;
  argsList: Parameters<TProdutoItemList>[0];
  refreshList: () => Promise<void>;
  dataList: TProdutoItem[];
  getList: TProdutoItemList;
  dataRead: TProdutoItem;
  getRead: TProdutoItemRead;
  dataSchema: TField[];
  getSchema: TProdutoItemSchema;
  dataClear: TProdutoItem;
  getClear: TProdutoItemClear;
  setCreate: TProdutoItemCreate;
  setUpdate: TProdutoItemUpdate;
  setDel: TProdutoItemDel;
  //#region type
  dataProdutoPlano: TProdutoPlano;
  getProdutoPlano(args: {
    id: TProdutoItemIds;
    select?: TSelect<TProdutoPlanoFields>;
  }): Promise<TProdutoPlano>;
  //#endregion
};

export const produtoItemStore = create<TProdutoItemStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "produtoItemList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await produtoItemService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await produtoItemService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await produtoItemService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await produtoItemService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return produtoItemService.mutation.create(args);
  },
  async setUpdate(args) {
    return produtoItemService.mutation.update(args);
  },
  async setDel(args) {
    return produtoItemService.mutation.del(args);
  },
  //#region store
  dataProdutoPlano: {},
  async getProdutoPlano(args) {
    set({ fetching: true });
    const data = await produtoItemService.query.produtoPlano(args);
    set({ dataProdutoPlano: data });
    set({ fetching: false });
    return data;
  },
  //#endregion
}));

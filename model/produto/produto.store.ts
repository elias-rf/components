import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { produtoService } from "./produto.service";
import type {
  TProduto,
  TProdutoClear,
  TProdutoCreate,
  TProdutoDel,
  TProdutoList,
  TProdutoRead,
  TProdutoSchema,
  TProdutoUpdate,
} from "./produto.type";
//#region import
//#endregion

type TProdutoStore = {
  fetching: boolean;
  argsList: Parameters<TProdutoList>[0];
  refreshList: () => Promise<void>;
  dataList: TProduto[];
  getList: TProdutoList;
  dataRead: TProduto;
  getRead: TProdutoRead;
  dataSchema: TFieldClient[];
  getSchema: TProdutoSchema;
  dataClear: TProduto;
  getClear: TProdutoClear;
  setCreate: TProdutoCreate;
  setUpdate: TProdutoUpdate;
  setDel: TProdutoDel;
  //#region type
  //#endregion
};

export const produtoStore = create<TProdutoStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "produtoList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await produtoService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await produtoService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await produtoService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await produtoService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return produtoService.mutation.create(args);
  },
  async setUpdate(args) {
    return produtoService.mutation.update(args);
  },
  async setDel(args) {
    return produtoService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

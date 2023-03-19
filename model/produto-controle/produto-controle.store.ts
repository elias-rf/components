import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { produtoControleService } from "./produto-controle.service";
import type {
  TProdutoControle,
  TProdutoControleClear,
  TProdutoControleCreate,
  TProdutoControleDel,
  TProdutoControleList,
  TProdutoControleRead,
  TProdutoControleSchema,
  TProdutoControleUpdate,
} from "./produto-controle.type";
//#region import
//#endregion

type TProdutoControleStore = {
  fetching: boolean;
  argsList: Parameters<TProdutoControleList>[0];
  refreshList: () => Promise<void>;
  dataList: TProdutoControle[];
  getList: TProdutoControleList;
  dataRead: TProdutoControle;
  getRead: TProdutoControleRead;
  dataSchema: TFieldDef[];
  getSchema: TProdutoControleSchema;
  dataClear: TProdutoControle;
  getClear: TProdutoControleClear;
  setCreate: TProdutoControleCreate;
  setUpdate: TProdutoControleUpdate;
  setDel: TProdutoControleDel;
  //#region type
  //#endregion
};

export const produtoControleStore = create<TProdutoControleStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "produtoControleList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await produtoControleService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await produtoControleService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await produtoControleService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await produtoControleService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return produtoControleService.mutation.create(args);
    },
    async setUpdate(args) {
      return produtoControleService.mutation.update(args);
    },
    async setDel(args) {
      return produtoControleService.mutation.del(args);
    },
    //#region store
    //#endregion
  })
);

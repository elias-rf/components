import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { produtoCategoriaService } from "./produto-categoria.service";
import type {
  TProdutoCategoria,
  TProdutoCategoriaClear,
  TProdutoCategoriaCreate,
  TProdutoCategoriaDel,
  TProdutoCategoriaList,
  TProdutoCategoriaRead,
  TProdutoCategoriaSchema,
  TProdutoCategoriaUpdate,
} from "./produto-categoria.type";
//#region import
//#endregion

type TProdutoCategoriaStore = {
  fetching: boolean;
  argsList: Parameters<TProdutoCategoriaList>[0];
  refreshList: () => Promise<void>;
  dataList: TProdutoCategoria[];
  getList: TProdutoCategoriaList;
  dataRead: TProdutoCategoria;
  getRead: TProdutoCategoriaRead;
  dataSchema: TFieldClient[];
  getSchema: TProdutoCategoriaSchema;
  dataClear: TProdutoCategoria;
  getClear: TProdutoCategoriaClear;
  setCreate: TProdutoCategoriaCreate;
  setUpdate: TProdutoCategoriaUpdate;
  setDel: TProdutoCategoriaDel;
  //#region type
  //#endregion
};

export const produtoCategoriaStore = create<TProdutoCategoriaStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "produtoCategoriaList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await produtoCategoriaService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await produtoCategoriaService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await produtoCategoriaService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await produtoCategoriaService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return produtoCategoriaService.mutation.create(args);
    },
    async setUpdate(args) {
      return produtoCategoriaService.mutation.update(args);
    },
    async setDel(args) {
      return produtoCategoriaService.mutation.del(args);
    },
    //#region store
    //#endregion
  })
);

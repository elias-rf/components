import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { fornecedorService } from "./fornecedor.service";
import type {
  TFornecedor,
  TFornecedorClear,
  TFornecedorCreate,
  TFornecedorDel,
  TFornecedorList,
  TFornecedorRead,
  TFornecedorSchema,
  TFornecedorUpdate,
} from "./fornecedor.type";
//#region import
//#endregion

type TFornecedorStore = {
  fetching: boolean;
  argsList: Parameters<TFornecedorList>[0];
  refreshList: () => Promise<void>;
  dataList: TFornecedor[];
  getList: TFornecedorList;
  dataRead: TFornecedor;
  getRead: TFornecedorRead;
  dataSchema: TFieldClient[];
  getSchema: TFornecedorSchema;
  dataClear: TFornecedor;
  getClear: TFornecedorClear;
  setCreate: TFornecedorCreate;
  setUpdate: TFornecedorUpdate;
  setDel: TFornecedorDel;
  //#region type
  //#endregion
};

export const fornecedorStore = create<TFornecedorStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "fornecedorList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await fornecedorService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await fornecedorService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await fornecedorService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await fornecedorService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return fornecedorService.mutation.create(args);
  },
  async setUpdate(args) {
    return fornecedorService.mutation.update(args);
  },
  async setDel(args) {
    return fornecedorService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

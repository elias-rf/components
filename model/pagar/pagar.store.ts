import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { pagarService } from "./pagar.service";
import type {
  TPagar,
  TPagarClear,
  TPagarCreate,
  TPagarDel,
  TPagarList,
  TPagarRead,
  TPagarSchema,
  TPagarUpdate,
} from "./pagar.type";
//#region import
//#endregion

type TPagarStore = {
  fetching: boolean;
  argsList: Parameters<TPagarList>[0];
  refreshList: () => Promise<void>;
  dataList: TPagar[];
  getList: TPagarList;
  dataRead: TPagar;
  getRead: TPagarRead;
  dataSchema: TFieldDef[];
  getSchema: TPagarSchema;
  dataClear: TPagar;
  getClear: TPagarClear;
  setCreate: TPagarCreate;
  setUpdate: TPagarUpdate;
  setDel: TPagarDel;
  //#region type
  //#endregion
};

export const pagarStore = create<TPagarStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "pagarList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await pagarService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await pagarService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await pagarService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await pagarService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return pagarService.mutation.create(args);
  },
  async setUpdate(args) {
    return pagarService.mutation.update(args);
  },
  async setDel(args) {
    return pagarService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

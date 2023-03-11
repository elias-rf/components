import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { receberService } from "./receber.service";
import type {
  TReceber,
  TReceberClear,
  TReceberCreate,
  TReceberDel,
  TReceberList,
  TReceberRead,
  TReceberSchema,
  TReceberUpdate,
} from "./receber.type";
//#region import
//#endregion

type TReceberStore = {
  fetching: boolean;
  argsList: Parameters<TReceberList>[0];
  refreshList: () => Promise<void>;
  dataList: TReceber[];
  getList: TReceberList;
  dataRead: TReceber;
  getRead: TReceberRead;
  dataSchema: TFieldClient[];
  getSchema: TReceberSchema;
  dataClear: TReceber;
  getClear: TReceberClear;
  setCreate: TReceberCreate;
  setUpdate: TReceberUpdate;
  setDel: TReceberDel;
  //#region type
  //#endregion
};

export const receberStore = create<TReceberStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "receberList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await receberService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await receberService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await receberService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await receberService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return receberService.mutation.create(args);
  },
  async setUpdate(args) {
    return receberService.mutation.update(args);
  },
  async setDel(args) {
    return receberService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

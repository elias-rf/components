import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import { nfCfopService } from "./nf-cfop.service";
import type {
  TNfCfop,
  TNfCfopClear,
  TNfCfopCreate,
  TNfCfopDel,
  TNfCfopList,
  TNfCfopRead,
  TNfCfopSchema,
  TNfCfopUpdate,
} from "./nf-cfop.type";
//#region import
//#endregion

type TNfCfopStore = {
  fetching: boolean;
  argsList: Parameters<TNfCfopList>[0];
  refreshList: () => Promise<void>;
  dataList: TNfCfop[];
  getList: TNfCfopList;
  dataRead: TNfCfop;
  getRead: TNfCfopRead;
  dataSchema: TField[];
  getSchema: TNfCfopSchema;
  dataClear: TNfCfop;
  getClear: TNfCfopClear;
  setCreate: TNfCfopCreate;
  setUpdate: TNfCfopUpdate;
  setDel: TNfCfopDel;
  //#region type
  //#endregion
};

export const nfCfopStore = create<TNfCfopStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "nfCfopList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await nfCfopService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await nfCfopService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await nfCfopService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await nfCfopService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return nfCfopService.mutation.create(args);
  },
  async setUpdate(args) {
    return nfCfopService.mutation.update(args);
  },
  async setDel(args) {
    return nfCfopService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import { diamanteService } from "./diamante.service";
import type {
  TDiamante,
  TDiamanteClear,
  TDiamanteCreate,
  TDiamanteDel,
  TDiamanteList,
  TDiamanteRead,
  TDiamanteSchema,
  TDiamanteUpdate,
} from "./diamante.type";
//#region import
//#endregion

type TDiamanteStore = {
  fetching: boolean;
  argsList: Parameters<TDiamanteList>[0];
  refreshList: () => Promise<void>;
  dataList: TDiamante[];
  getList: TDiamanteList;
  dataRead: TDiamante;
  getRead: TDiamanteRead;
  dataSchema: TField[];
  getSchema: TDiamanteSchema;
  dataClear: TDiamante;
  getClear: TDiamanteClear;
  setCreate: TDiamanteCreate;
  setUpdate: TDiamanteUpdate;
  setDel: TDiamanteDel;
  //#region type
  //#endregion
};

export const diamanteStore = create<TDiamanteStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "diamanteList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await diamanteService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await diamanteService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await diamanteService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await diamanteService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return diamanteService.mutation.create(args);
  },
  async setUpdate(args) {
    return diamanteService.mutation.update(args);
  },
  async setDel(args) {
    return diamanteService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

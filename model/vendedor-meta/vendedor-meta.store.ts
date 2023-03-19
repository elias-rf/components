import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { vendedorMetaService } from "./vendedor-meta.service";
import type {
  TVendedorMeta,
  TVendedorMetaClear,
  TVendedorMetaCreate,
  TVendedorMetaDel,
  TVendedorMetaList,
  TVendedorMetaRead,
  TVendedorMetaSchema,
  TVendedorMetaUpdate,
} from "./vendedor-meta.type";
//#region import
//#endregion

type TVendedorMetaStore = {
  fetching: boolean;
  argsList: Parameters<TVendedorMetaList>[0];
  refreshList: () => Promise<void>;
  dataList: TVendedorMeta[];
  getList: TVendedorMetaList;
  dataRead: TVendedorMeta;
  getRead: TVendedorMetaRead;
  dataSchema: TFieldDef[];
  getSchema: TVendedorMetaSchema;
  dataClear: TVendedorMeta;
  getClear: TVendedorMetaClear;
  setCreate: TVendedorMetaCreate;
  setUpdate: TVendedorMetaUpdate;
  setDel: TVendedorMetaDel;
  //#region type
  //#endregion
};

export const vendedorMetaStore = create<TVendedorMetaStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "vendedorMetaList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await vendedorMetaService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await vendedorMetaService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await vendedorMetaService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await vendedorMetaService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return vendedorMetaService.mutation.create(args);
  },
  async setUpdate(args) {
    return vendedorMetaService.mutation.update(args);
  },
  async setDel(args) {
    return vendedorMetaService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

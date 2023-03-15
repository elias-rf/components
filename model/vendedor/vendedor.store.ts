import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import { vendedorService } from "./vendedor.service";
import type {
  TVendedor,
  TVendedorClear,
  TVendedorCreate,
  TVendedorDel,
  TVendedorList,
  TVendedorRead,
  TVendedorSchema,
  TVendedorUpdate,
} from "./vendedor.type";
//#region import
//#endregion

type TVendedorStore = {
  fetching: boolean;
  argsList: Parameters<TVendedorList>[0];
  refreshList: () => Promise<void>;
  dataList: TVendedor[];
  getList: TVendedorList;
  dataRead: TVendedor;
  getRead: TVendedorRead;
  dataSchema: TField[];
  getSchema: TVendedorSchema;
  dataClear: TVendedor;
  getClear: TVendedorClear;
  setCreate: TVendedorCreate;
  setUpdate: TVendedorUpdate;
  setDel: TVendedorDel;
  //#region type
  //#endregion
};

export const vendedorStore = create<TVendedorStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "vendedorList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await vendedorService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await vendedorService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await vendedorService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await vendedorService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return vendedorService.mutation.create(args);
  },
  async setUpdate(args) {
    return vendedorService.mutation.update(args);
  },
  async setDel(args) {
    return vendedorService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import { empregadoService } from "./empregado.service";
import type {
  TEmpregado,
  TEmpregadoClear,
  TEmpregadoCreate,
  TEmpregadoDel,
  TEmpregadoList,
  TEmpregadoRead,
  TEmpregadoSchema,
  TEmpregadoUpdate,
} from "./empregado.type";
//#region import
//#endregion

type TEmpregadoStore = {
  fetching: boolean;
  argsList: Parameters<TEmpregadoList>[0];
  refreshList: () => Promise<void>;
  dataList: TEmpregado[];
  getList: TEmpregadoList;
  dataRead: TEmpregado;
  getRead: TEmpregadoRead;
  dataSchema: TField[];
  getSchema: TEmpregadoSchema;
  dataClear: TEmpregado;
  getClear: TEmpregadoClear;
  setCreate: TEmpregadoCreate;
  setUpdate: TEmpregadoUpdate;
  setDel: TEmpregadoDel;
  //#region type
  //#endregion
};

export const empregadoStore = create<TEmpregadoStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "empregadoList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await empregadoService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await empregadoService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await empregadoService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await empregadoService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return empregadoService.mutation.create(args);
  },
  async setUpdate(args) {
    return empregadoService.mutation.update(args);
  },
  async setDel(args) {
    return empregadoService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

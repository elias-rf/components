import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { maquinaService } from "./maquina.service";
import type {
  TMaquina,
  TMaquinaClear,
  TMaquinaCreate,
  TMaquinaDel,
  TMaquinaList,
  TMaquinaRead,
  TMaquinaSchema,
  TMaquinaUpdate,
} from "./maquina.type";

type TMaquinaStore = {
  fetching: boolean;
  argsList: Parameters<TMaquinaList>[0];
  refreshList: () => Promise<void>;
  dataList: TMaquina[];
  getList: TMaquinaList;
  dataRead: TMaquina;
  getRead: TMaquinaRead;
  dataSchema: TFieldDef[];
  getSchema: TMaquinaSchema;
  dataClear: TMaquina;
  getClear: TMaquinaClear;
  setCreate: TMaquinaCreate;
  setUpdate: TMaquinaUpdate;
  setDel: TMaquinaDel;
  //#region type
  //#endregion
};

export const maquinaStore = create<TMaquinaStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "maquinaList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await maquinaService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await maquinaService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await maquinaService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await maquinaService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return maquinaService.mutation.create(args);
  },
  async setUpdate(args) {
    return maquinaService.mutation.update(args);
  },
  async setDel(args) {
    return maquinaService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

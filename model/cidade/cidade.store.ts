import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import { cidadeService } from "./cidade.service";
import type {
  TCidade,
  TCidadeClear,
  TCidadeCreate,
  TCidadeDel,
  TCidadeList,
  TCidadeRead,
  TCidadeSchema,
  TCidadeUpdate,
} from "./cidade.type";
//#region import
//#endregion

type TCidadeStore = {
  fetching: boolean;
  argsList: Parameters<TCidadeList>[0];
  refreshList: () => Promise<void>;
  dataList: TCidade[];
  getList: TCidadeList;
  dataRead: TCidade;
  getRead: TCidadeRead;
  dataSchema: TField[];
  getSchema: TCidadeSchema;
  dataClear: TCidade;
  getClear: TCidadeClear;
  setCreate: TCidadeCreate;
  setUpdate: TCidadeUpdate;
  setDel: TCidadeDel;
  //#region type
  //#endregion
};

export const cidadeStore = create<TCidadeStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "cidadeList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await cidadeService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await cidadeService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await cidadeService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await cidadeService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return cidadeService.mutation.create(args);
  },
  async setUpdate(args) {
    return cidadeService.mutation.update(args);
  },
  async setDel(args) {
    return cidadeService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { nfEntradaLogService } from "./nf-entrada-log.service";
import type {
  TNfEntradaLog,
  TNfEntradaLogClear,
  TNfEntradaLogCreate,
  TNfEntradaLogDel,
  TNfEntradaLogList,
  TNfEntradaLogRead,
  TNfEntradaLogSchema,
  TNfEntradaLogUpdate,
} from "./nf-entrada-log.type";
//#region import
//#endregion

type TNfEntradaLogStore = {
  fetching: boolean;
  argsList: Parameters<TNfEntradaLogList>[0];
  refreshList: () => Promise<void>;
  dataList: TNfEntradaLog[];
  getList: TNfEntradaLogList;
  dataRead: TNfEntradaLog;
  getRead: TNfEntradaLogRead;
  dataSchema: TFieldDef[];
  getSchema: TNfEntradaLogSchema;
  dataClear: TNfEntradaLog;
  getClear: TNfEntradaLogClear;
  setCreate: TNfEntradaLogCreate;
  setUpdate: TNfEntradaLogUpdate;
  setDel: TNfEntradaLogDel;
  //#region type
  //#endregion
};

export const nfEntradaLogStore = create<TNfEntradaLogStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "nfEntradaLogList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await nfEntradaLogService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await nfEntradaLogService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await nfEntradaLogService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await nfEntradaLogService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return nfEntradaLogService.mutation.create(args);
  },
  async setUpdate(args) {
    return nfEntradaLogService.mutation.update(args);
  },
  async setDel(args) {
    return nfEntradaLogService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

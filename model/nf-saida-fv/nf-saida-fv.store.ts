import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import { nfSaidaFvService } from "./nf-saida-fv.service";
import type {
  TNfSaidaFv,
  TNfSaidaFvClear,
  TNfSaidaFvCreate,
  TNfSaidaFvDel,
  TNfSaidaFvList,
  TNfSaidaFvRead,
  TNfSaidaFvSchema,
  TNfSaidaFvUpdate,
} from "./nf-saida-fv.type";
//#region import
//#endregion

type TNfSaidaFvStore = {
  fetching: boolean;
  argsList: Parameters<TNfSaidaFvList>[0];
  refreshList: () => Promise<void>;
  dataList: TNfSaidaFv[];
  getList: TNfSaidaFvList;
  dataRead: TNfSaidaFv;
  getRead: TNfSaidaFvRead;
  dataSchema: TField[];
  getSchema: TNfSaidaFvSchema;
  dataClear: TNfSaidaFv;
  getClear: TNfSaidaFvClear;
  setCreate: TNfSaidaFvCreate;
  setUpdate: TNfSaidaFvUpdate;
  setDel: TNfSaidaFvDel;
  //#region type
  //#endregion
};

export const nfSaidaFvStore = create<TNfSaidaFvStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "nfSaidaFvList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await nfSaidaFvService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await nfSaidaFvService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await nfSaidaFvService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await nfSaidaFvService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return nfSaidaFvService.mutation.create(args);
  },
  async setUpdate(args) {
    return nfSaidaFvService.mutation.update(args);
  },
  async setDel(args) {
    return nfSaidaFvService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

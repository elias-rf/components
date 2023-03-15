import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import { nfEntradaControleService } from "./nf-entrada-controle.service";
import type {
  TNfEntradaControle,
  TNfEntradaControleClear,
  TNfEntradaControleCreate,
  TNfEntradaControleDel,
  TNfEntradaControleList,
  TNfEntradaControleRead,
  TNfEntradaControleSchema,
  TNfEntradaControleUpdate,
} from "./nf-entrada-controle.type";
//#region import
//#endregion

type TNfEntradaControleStore = {
  fetching: boolean;
  argsList: Parameters<TNfEntradaControleList>[0];
  refreshList: () => Promise<void>;
  dataList: TNfEntradaControle[];
  getList: TNfEntradaControleList;
  dataRead: TNfEntradaControle;
  getRead: TNfEntradaControleRead;
  dataSchema: TField[];
  getSchema: TNfEntradaControleSchema;
  dataClear: TNfEntradaControle;
  getClear: TNfEntradaControleClear;
  setCreate: TNfEntradaControleCreate;
  setUpdate: TNfEntradaControleUpdate;
  setDel: TNfEntradaControleDel;
  //#region type
  //#endregion
};

export const nfEntradaControleStore = create<TNfEntradaControleStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "nfEntradaControleList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await nfEntradaControleService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await nfEntradaControleService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await nfEntradaControleService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await nfEntradaControleService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return nfEntradaControleService.mutation.create(args);
    },
    async setUpdate(args) {
      return nfEntradaControleService.mutation.update(args);
    },
    async setDel(args) {
      return nfEntradaControleService.mutation.del(args);
    },
    //#region store
    //#endregion
  })
);

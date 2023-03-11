import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { etiquetaInternaService } from "./etiqueta-interna.service";
import type {
  TEtiquetaInterna,
  TEtiquetaInternaClear,
  TEtiquetaInternaCreate,
  TEtiquetaInternaDel,
  TEtiquetaInternaList,
  TEtiquetaInternaRead,
  TEtiquetaInternaSchema,
  TEtiquetaInternaUpdate,
} from "./etiqueta-interna.type";
//#region import
//#endregion

type TEtiquetaInternaStore = {
  fetching: boolean;
  argsList: Parameters<TEtiquetaInternaList>[0];
  refreshList: () => Promise<void>;
  dataList: TEtiquetaInterna[];
  getList: TEtiquetaInternaList;
  dataRead: TEtiquetaInterna;
  getRead: TEtiquetaInternaRead;
  dataSchema: TFieldClient[];
  getSchema: TEtiquetaInternaSchema;
  dataClear: TEtiquetaInterna;
  getClear: TEtiquetaInternaClear;
  setCreate: TEtiquetaInternaCreate;
  setUpdate: TEtiquetaInternaUpdate;
  setDel: TEtiquetaInternaDel;
  //#region type
  //#endregion
};

export const etiquetaInternaStore = create<TEtiquetaInternaStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "etiquetaInternaList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await etiquetaInternaService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await etiquetaInternaService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await etiquetaInternaService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await etiquetaInternaService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return etiquetaInternaService.mutation.create(args);
    },
    async setUpdate(args) {
      return etiquetaInternaService.mutation.update(args);
    },
    async setDel(args) {
      return etiquetaInternaService.mutation.del(args);
    },
    //#region store
    //#endregion
  })
);

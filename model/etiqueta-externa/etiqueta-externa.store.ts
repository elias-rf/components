import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import { etiquetaExternaService } from "./etiqueta-externa.service";
import type {
  TEtiquetaExterna,
  TEtiquetaExternaClear,
  TEtiquetaExternaCreate,
  TEtiquetaExternaDel,
  TEtiquetaExternaList,
  TEtiquetaExternaRead,
  TEtiquetaExternaSchema,
  TEtiquetaExternaUpdate,
} from "./etiqueta-externa.type";
//#region import
//#endregion

type TEtiquetaExternaStore = {
  fetching: boolean;
  argsList: Parameters<TEtiquetaExternaList>[0];
  refreshList: () => Promise<void>;
  dataList: TEtiquetaExterna[];
  getList: TEtiquetaExternaList;
  dataRead: TEtiquetaExterna;
  getRead: TEtiquetaExternaRead;
  dataSchema: TField[];
  getSchema: TEtiquetaExternaSchema;
  dataClear: TEtiquetaExterna;
  getClear: TEtiquetaExternaClear;
  setCreate: TEtiquetaExternaCreate;
  setUpdate: TEtiquetaExternaUpdate;
  setDel: TEtiquetaExternaDel;
  //#region type
  //#endregion
};

export const etiquetaExternaStore = create<TEtiquetaExternaStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "etiquetaExternaList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await etiquetaExternaService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await etiquetaExternaService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await etiquetaExternaService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await etiquetaExternaService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return etiquetaExternaService.mutation.create(args);
    },
    async setUpdate(args) {
      return etiquetaExternaService.mutation.update(args);
    },
    async setDel(args) {
      return etiquetaExternaService.mutation.del(args);
    },
    //#region store
    //#endregion
  })
);

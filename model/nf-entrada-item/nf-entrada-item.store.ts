import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { nfEntradaItemService } from "./nf-entrada-item.service";
import type {
  TNfEntradaItem,
  TNfEntradaItemClear,
  TNfEntradaItemCreate,
  TNfEntradaItemDel,
  TNfEntradaItemList,
  TNfEntradaItemRead,
  TNfEntradaItemSchema,
  TNfEntradaItemUpdate,
} from "./nf-entrada-item.type";
//#region import
//#endregion

type TNfEntradaItemStore = {
  fetching: boolean;
  argsList: Parameters<TNfEntradaItemList>[0];
  refreshList: () => Promise<void>;
  dataList: TNfEntradaItem[];
  getList: TNfEntradaItemList;
  dataRead: TNfEntradaItem;
  getRead: TNfEntradaItemRead;
  dataSchema: TFieldDef[];
  getSchema: TNfEntradaItemSchema;
  dataClear: TNfEntradaItem;
  getClear: TNfEntradaItemClear;
  setCreate: TNfEntradaItemCreate;
  setUpdate: TNfEntradaItemUpdate;
  setDel: TNfEntradaItemDel;
  //#region type
  //#endregion
};

export const nfEntradaItemStore = create<TNfEntradaItemStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "nfEntradaItemList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await nfEntradaItemService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await nfEntradaItemService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await nfEntradaItemService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await nfEntradaItemService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return nfEntradaItemService.mutation.create(args);
  },
  async setUpdate(args) {
    return nfEntradaItemService.mutation.update(args);
  },
  async setDel(args) {
    return nfEntradaItemService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

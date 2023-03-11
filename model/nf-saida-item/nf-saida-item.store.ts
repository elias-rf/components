import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { nfSaidaItemService } from "./nf-saida-item.service";
import type {
  TNfSaidaItem,
  TNfSaidaItemClear,
  TNfSaidaItemCreate,
  TNfSaidaItemDel,
  TNfSaidaItemList,
  TNfSaidaItemRead,
  TNfSaidaItemSchema,
  TNfSaidaItemUpdate,
} from "./nf-saida-item.type";
//#region import
//#endregion

type TNfSaidaItemStore = {
  fetching: boolean;
  argsList: Parameters<TNfSaidaItemList>[0];
  refreshList: () => Promise<void>;
  dataList: TNfSaidaItem[];
  getList: TNfSaidaItemList;
  dataRead: TNfSaidaItem;
  getRead: TNfSaidaItemRead;
  dataSchema: TFieldClient[];
  getSchema: TNfSaidaItemSchema;
  dataClear: TNfSaidaItem;
  getClear: TNfSaidaItemClear;
  setCreate: TNfSaidaItemCreate;
  setUpdate: TNfSaidaItemUpdate;
  setDel: TNfSaidaItemDel;
  //#region type
  //#endregion
};

export const nfSaidaItemStore = create<TNfSaidaItemStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "nfSaidaItemList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await nfSaidaItemService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await nfSaidaItemService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await nfSaidaItemService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await nfSaidaItemService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return nfSaidaItemService.mutation.create(args);
  },
  async setUpdate(args) {
    return nfSaidaItemService.mutation.update(args);
  },
  async setDel(args) {
    return nfSaidaItemService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

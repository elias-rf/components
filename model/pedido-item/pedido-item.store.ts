import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { pedidoItemService } from "./pedido-item.service";
import type {
  TPedidoItem,
  TPedidoItemClear,
  TPedidoItemCreate,
  TPedidoItemDel,
  TPedidoItemList,
  TPedidoItemRead,
  TPedidoItemSchema,
  TPedidoItemUpdate,
} from "./pedido-item.type";
//#region import
//#endregion

type TPedidoItemStore = {
  fetching: boolean;
  argsList: Parameters<TPedidoItemList>[0];
  refreshList: () => Promise<void>;
  dataList: TPedidoItem[];
  getList: TPedidoItemList;
  dataRead: TPedidoItem;
  getRead: TPedidoItemRead;
  dataSchema: TFieldClient[];
  getSchema: TPedidoItemSchema;
  dataClear: TPedidoItem;
  getClear: TPedidoItemClear;
  setCreate: TPedidoItemCreate;
  setUpdate: TPedidoItemUpdate;
  setDel: TPedidoItemDel;
  //#region type
  //#endregion
};

export const pedidoItemStore = create<TPedidoItemStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "pedidoItemList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await pedidoItemService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await pedidoItemService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await pedidoItemService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await pedidoItemService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return pedidoItemService.mutation.create(args);
  },
  async setUpdate(args) {
    return pedidoItemService.mutation.update(args);
  },
  async setDel(args) {
    return pedidoItemService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

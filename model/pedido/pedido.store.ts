import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { pedidoService } from "./pedido.service";
import type {
  TPedido,
  TPedidoClear,
  TPedidoCreate,
  TPedidoDel,
  TPedidoList,
  TPedidoRead,
  TPedidoSchema,
  TPedidoUpdate,
} from "./pedido.type";
//#region import
//#endregion

type TPedidoStore = {
  fetching: boolean;
  argsList: Parameters<TPedidoList>[0];
  refreshList: () => Promise<void>;
  dataList: TPedido[];
  getList: TPedidoList;
  dataRead: TPedido;
  getRead: TPedidoRead;
  dataSchema: TFieldClient[];
  getSchema: TPedidoSchema;
  dataClear: TPedido;
  getClear: TPedidoClear;
  setCreate: TPedidoCreate;
  setUpdate: TPedidoUpdate;
  setDel: TPedidoDel;
  //#region type
  //#endregion
};

export const pedidoStore = create<TPedidoStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "pedidoList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await pedidoService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await pedidoService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await pedidoService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await pedidoService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return pedidoService.mutation.create(args);
  },
  async setUpdate(args) {
    return pedidoService.mutation.update(args);
  },
  async setDel(args) {
    return pedidoService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

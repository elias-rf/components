import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import type {
  TEstoque,
  TEstoqueClear,
  TEstoqueCreate,
  TEstoqueDel,
  TEstoqueList,
  TEstoqueRead,
  TEstoqueSchema,
  TEstoqueUpdate,
} from "./estoque.type";
//#region import
import { estoqueService } from "./estoque.service";
import type { TEstoqueIds } from "./estoque.type";
//#endregion

type TEstoqueStore = {
  fetching: boolean;
  argsList: Parameters<TEstoqueList>[0];
  refreshList: () => Promise<void>;
  dataList: TEstoque[];
  getList: TEstoqueList;
  dataRead: TEstoque;
  getRead: TEstoqueRead;
  dataSchema: TField[];
  getSchema: TEstoqueSchema;
  dataClear: TEstoque;
  getClear: TEstoqueClear;
  setCreate: TEstoqueCreate;
  setUpdate: TEstoqueUpdate;
  setDel: TEstoqueDel;
  //#region type
  setIncrement: (args: { id: TEstoqueIds; quantidade: number }) => Promise<any>;
  //#endregion
};

export const estoqueStore = create<TEstoqueStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "estoqueList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await estoqueService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await estoqueService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await estoqueService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await estoqueService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return estoqueService.mutation.create(args);
  },
  async setUpdate(args) {
    return estoqueService.mutation.update(args);
  },
  async setDel(args) {
    return estoqueService.mutation.del(args);
  },
  //#region store
  async setIncrement(args) {
    return estoqueService.mutation.increment(args);
  },
  //#endregion
}));

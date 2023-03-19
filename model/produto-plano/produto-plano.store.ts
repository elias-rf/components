import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { produtoPlanoService } from "./produto-plano.service";
import type {
  TProdutoPlano,
  TProdutoPlanoClear,
  TProdutoPlanoCreate,
  TProdutoPlanoDel,
  TProdutoPlanoList,
  TProdutoPlanoRead,
  TProdutoPlanoSchema,
  TProdutoPlanoUpdate,
} from "./produto-plano.type";
//#region import
//#endregion

type TProdutoPlanoStore = {
  fetching: boolean;
  argsList: Parameters<TProdutoPlanoList>[0];
  refreshList: () => Promise<void>;
  dataList: TProdutoPlano[];
  getList: TProdutoPlanoList;
  dataRead: TProdutoPlano;
  getRead: TProdutoPlanoRead;
  dataSchema: TFieldDef[];
  getSchema: TProdutoPlanoSchema;
  dataClear: TProdutoPlano;
  getClear: TProdutoPlanoClear;
  setCreate: TProdutoPlanoCreate;
  setUpdate: TProdutoPlanoUpdate;
  setDel: TProdutoPlanoDel;
  //#region type
  //#endregion
};

export const produtoPlanoStore = create<TProdutoPlanoStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "produtoPlanoList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await produtoPlanoService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await produtoPlanoService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await produtoPlanoService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await produtoPlanoService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return produtoPlanoService.mutation.create(args);
  },
  async setUpdate(args) {
    return produtoPlanoService.mutation.update(args);
  },
  async setDel(args) {
    return produtoPlanoService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

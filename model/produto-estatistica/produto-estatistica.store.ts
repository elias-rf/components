import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import type {
  TProdutoEstatistica,
  TProdutoEstatisticaClear,
  TProdutoEstatisticaCreate,
  TProdutoEstatisticaDel,
  TProdutoEstatisticaList,
  TProdutoEstatisticaRead,
  TProdutoEstatisticaSchema,
  TProdutoEstatisticaUpdate,
} from "./produto-estatistica.type";
//#region import
import { produtoEstatisticaService } from "./produto-estatistica.service";
import { TProdutoEstatisticaIds } from "./produto-estatistica.type";
//#endregion

type TProdutoEstatisticaStore = {
  fetching: boolean;
  argsList: Parameters<TProdutoEstatisticaList>[0];
  refreshList: () => Promise<void>;
  dataList: TProdutoEstatistica[];
  getList: TProdutoEstatisticaList;
  dataRead: TProdutoEstatistica;
  getRead: TProdutoEstatisticaRead;
  dataSchema: TField[];
  getSchema: TProdutoEstatisticaSchema;
  dataClear: TProdutoEstatistica;
  getClear: TProdutoEstatisticaClear;
  setCreate: TProdutoEstatisticaCreate;
  setUpdate: TProdutoEstatisticaUpdate;
  setDel: TProdutoEstatisticaDel;
  //#region type
  setIncrement: (args: {
    id: TProdutoEstatisticaIds;
    quantidade: number;
  }) => Promise<any>;
  //#endregion
};

export const produtoEstatisticaStore = create<TProdutoEstatisticaStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "produtoEstatisticaList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await produtoEstatisticaService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await produtoEstatisticaService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await produtoEstatisticaService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await produtoEstatisticaService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return produtoEstatisticaService.mutation.create(args);
    },
    async setUpdate(args) {
      return produtoEstatisticaService.mutation.update(args);
    },
    async setDel(args) {
      return produtoEstatisticaService.mutation.del(args);
    },
    //#region store
    async setIncrement(args) {
      return produtoEstatisticaService.mutation.increment(args);
    },
    //#endregion
  })
);

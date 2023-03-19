import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { operacaoProducaoService } from "./operacao-producao.service";
import type {
  TOperacaoProducao,
  TOperacaoProducaoClear,
  TOperacaoProducaoCreate,
  TOperacaoProducaoDel,
  TOperacaoProducaoList,
  TOperacaoProducaoRead,
  TOperacaoProducaoSchema,
  TOperacaoProducaoUpdate,
} from "./operacao-producao.type";
//#region import
//#endregion

type TOperacaoProducaoStore = {
  fetching: boolean;
  argsList: Parameters<TOperacaoProducaoList>[0];
  refreshList: () => Promise<void>;
  dataList: TOperacaoProducao[];
  getList: TOperacaoProducaoList;
  dataRead: TOperacaoProducao;
  getRead: TOperacaoProducaoRead;
  dataSchema: TFieldDef[];
  getSchema: TOperacaoProducaoSchema;
  dataClear: TOperacaoProducao;
  getClear: TOperacaoProducaoClear;
  setCreate: TOperacaoProducaoCreate;
  setUpdate: TOperacaoProducaoUpdate;
  setDel: TOperacaoProducaoDel;
  //#region type
  //#endregion
};

export const operacaoProducaoStore = create<TOperacaoProducaoStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "operacaoProducaoList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await operacaoProducaoService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await operacaoProducaoService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await operacaoProducaoService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await operacaoProducaoService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return operacaoProducaoService.mutation.create(args);
    },
    async setUpdate(args) {
      return operacaoProducaoService.mutation.update(args);
    },
    async setDel(args) {
      return operacaoProducaoService.mutation.del(args);
    },
    //#region store
    //#endregion
  })
);

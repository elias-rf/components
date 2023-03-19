import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { esterilizacaoInternaService } from "./esterilizacao-interna.service";
import type {
  TEsterilizacaoInterna,
  TEsterilizacaoInternaClear,
  TEsterilizacaoInternaCreate,
  TEsterilizacaoInternaDel,
  TEsterilizacaoInternaList,
  TEsterilizacaoInternaRead,
  TEsterilizacaoInternaSchema,
  TEsterilizacaoInternaUpdate,
} from "./esterilizacao-interna.type";
//#region import
//#endregion

type TEsterilizacaoInternaStore = {
  fetching: boolean;
  argsList: Parameters<TEsterilizacaoInternaList>[0];
  refreshList: () => Promise<void>;
  dataList: TEsterilizacaoInterna[];
  getList: TEsterilizacaoInternaList;
  dataRead: TEsterilizacaoInterna;
  getRead: TEsterilizacaoInternaRead;
  dataSchema: TFieldDef[];
  getSchema: TEsterilizacaoInternaSchema;
  dataClear: TEsterilizacaoInterna;
  getClear: TEsterilizacaoInternaClear;
  setCreate: TEsterilizacaoInternaCreate;
  setUpdate: TEsterilizacaoInternaUpdate;
  setDel: TEsterilizacaoInternaDel;
  //#region type
  dataDiario: { dia: string; dia_semana: string; quantidade: number }[];
  getDiario: (args: {
    inicio: string;
    fim: string;
  }) => Promise<{ dia: string; dia_semana: string; quantidade: number }[]>;
  dataMensal: { mes: string; quantidade: number }[];
  getMensal: (args: {
    mes: string;
  }) => Promise<{ mes: string; quantidade: number }[]>;
  dataModelo: { modelo: string; quantidade: number }[];
  getModelo: (args: {
    data: string;
    produto: string;
  }) => Promise<{ modelo: string; quantidade: number }[]>;
  dataProduto: { produto: string; quantidade: number }[];
  getProduto: (args: {
    data: string;
  }) => Promise<{ produto: string; quantidade: number }[]>;
  dataSchemaDiario: TFieldDef[];
  getSchemaDiario: () => Promise<TFieldDef[]>;
  dataSchemaMensal: TFieldDef[];
  getSchemaMensal: () => Promise<TFieldDef[]>;
  dataSchemaProduto: TFieldDef[];
  getSchemaProduto: () => Promise<TFieldDef[]>;
  dataSchemaModelo: TFieldDef[];
  getSchemaModelo: () => Promise<TFieldDef[]>;
  //#endregion
};

export const esterilizacaoInternaStore = create<TEsterilizacaoInternaStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "esterilizacaoInternaList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await esterilizacaoInternaService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return esterilizacaoInternaService.mutation.create(args);
    },
    async setUpdate(args) {
      return esterilizacaoInternaService.mutation.update(args);
    },
    async setDel(args) {
      return esterilizacaoInternaService.mutation.del(args);
    },
    //#region store
    dataSchemaDiario: [],
    dataSchemaMensal: [],
    dataSchemaProduto: [],
    dataSchemaModelo: [],

    dataDiario: [],
    async getDiario(args) {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.diario(args);
      set({ dataDiario: data });
      set({ fetching: false });
      return data;
    },

    dataMensal: [],
    async getMensal(args) {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.mensal(args);
      set({ dataMensal: data });
      set({ fetching: false });
      return data;
    },

    dataModelo: [],
    async getModelo(args) {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.modelo(args);
      set({ dataModelo: data });
      set({ fetching: false });
      return data;
    },

    dataProduto: [],
    async getProduto(args) {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.produto(args);
      set({ dataProduto: data });
      set({ fetching: false });
      return data;
    },

    async getSchemaDiario() {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.schemaDiario();
      set({ dataSchemaDiario: data });
      set({ fetching: false });
      return data;
    },

    async getSchemaMensal() {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.schemaMensal();
      set({ dataSchemaMensal: data });
      set({ fetching: false });
      return data;
    },

    async getSchemaModelo() {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.schemaModelo();
      set({ dataSchemaModelo: data });
      set({ fetching: false });
      return data;
    },

    async getSchemaProduto() {
      set({ fetching: true });
      const data = await esterilizacaoInternaService.query.schemaProduto();
      set({ dataSchemaProduto: data });
      set({ fetching: false });
      return data;
    },

    //#endregion
  })
);

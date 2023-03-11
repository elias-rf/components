import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import { esterilizacaoExternaService } from "./esterilizacao-externa.service";
import type {
  TEsterilizacaoExterna,
  TEsterilizacaoExternaClear,
  TEsterilizacaoExternaCreate,
  TEsterilizacaoExternaDel,
  TEsterilizacaoExternaList,
  TEsterilizacaoExternaRead,
  TEsterilizacaoExternaSchema,
  TEsterilizacaoExternaUpdate,
} from "./esterilizacao-externa.type";
//#region import
//#endregion

type TEsterilizacaoExternaStore = {
  fetching: boolean;
  argsList: Parameters<TEsterilizacaoExternaList>[0];
  refreshList: () => Promise<void>;
  dataList: TEsterilizacaoExterna[];
  getList: TEsterilizacaoExternaList;
  dataRead: TEsterilizacaoExterna;
  getRead: TEsterilizacaoExternaRead;
  dataSchema: TFieldClient[];
  getSchema: TEsterilizacaoExternaSchema;
  dataClear: TEsterilizacaoExterna;
  getClear: TEsterilizacaoExternaClear;
  setCreate: TEsterilizacaoExternaCreate;
  setUpdate: TEsterilizacaoExternaUpdate;
  setDel: TEsterilizacaoExternaDel;
  //#region type
  dataDiario: any[];
  getDiario: (args: {
    inicio: string;
    fim: string;
  }) => Promise<{ dia: string; dia_semana: string; quantidade: number }[]>;

  dataMensal: any[];
  getMensal: (args: {
    mes: string;
  }) => Promise<{ mes: string; quantidade: number }[]>;

  dataModelo: any[];
  getModelo: (args: {
    data: string;
    produto: string;
  }) => Promise<{ modelo: string; quantidade: number }[]>;

  dataProduto: any[];
  getProduto: (args: {
    data: string;
  }) => Promise<{ produto: string; quantidade: number }[]>;

  dataSchemaDiario: TFieldClient[];
  getSchemaDiario: () => Promise<TFieldClient[]>;

  dataSchemaMensal: TFieldClient[];
  getSchemaMensal: () => Promise<TFieldClient[]>;

  dataSchemaProduto: TFieldClient[];
  getSchemaProduto: () => Promise<TFieldClient[]>;

  dataSchemaModelo: TFieldClient[];
  getSchemaModelo: () => Promise<TFieldClient[]>;
  //#endregion
};

export const esterilizacaoExternaStore = create<TEsterilizacaoExternaStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "esterilizacaoExternaList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await esterilizacaoExternaService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return esterilizacaoExternaService.mutation.create(args);
    },
    async setUpdate(args) {
      return esterilizacaoExternaService.mutation.update(args);
    },
    async setDel(args) {
      return esterilizacaoExternaService.mutation.del(args);
    },
    //#region store
    dataDiario: [],
    async getDiario(args) {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.diario(args);
      set({ dataDiario: data });
      set({ fetching: false });
      return data;
    },

    dataMensal: [],
    async getMensal(args) {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.mensal(args);
      set({ dataMensal: data });
      set({ fetching: false });
      return data;
    },

    dataModelo: [],
    async getModelo(args) {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.modelo(args);
      set({ dataModelo: data });
      set({ fetching: false });
      return data;
    },

    dataProduto: [],
    async getProduto(args) {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.produto(args);
      set({ dataProduto: data });
      set({ fetching: false });
      return data;
    },

    dataSchemaDiario: [],
    async getSchemaDiario() {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.schemaDiario();
      set({ dataSchemaDiario: data });
      set({ fetching: false });
      return data;
    },

    dataSchemaMensal: [],
    async getSchemaMensal() {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.schemaMensal();
      set({ dataSchemaMensal: data });
      set({ fetching: false });
      return data;
    },

    dataSchemaModelo: [],
    async getSchemaModelo() {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.schemaModelo();
      set({ dataSchemaModelo: data });
      set({ fetching: false });
      return data;
    },

    dataSchemaProduto: [],
    async getSchemaProduto() {
      set({ fetching: true });
      const data = await esterilizacaoExternaService.query.schemaProduto();
      set({ dataSchemaProduto: data });
      set({ fetching: false });
      return data;
    },
    //#endregion
  })
);

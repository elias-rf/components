import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import type {
  TOrdemProducaoOperacao,
  TOrdemProducaoOperacaoClear,
  TOrdemProducaoOperacaoCreate,
  TOrdemProducaoOperacaoDel,
  TOrdemProducaoOperacaoList,
  TOrdemProducaoOperacaoRead,
  TOrdemProducaoOperacaoSchema,
  TOrdemProducaoOperacaoUpdate,
} from "./ordem-producao-operacao.type";
//#region import
import { ordemProducaoOperacaoService } from "./ordem-producao-operacao.service";
import type {
  TOrdemProducaoOperacaoDiarioArgs,
  TOrdemProducaoOperacaoDiarioResp,
  TOrdemProducaoOperacaoMensalArgs,
  TOrdemProducaoOperacaoMensalResp,
  TOrdemProducaoOperacaoModeloArgs,
  TOrdemProducaoOperacaoModeloResp,
  TOrdemProducaoOperacaoProdutoArgs,
  TOrdemProducaoOperacaoProdutoResp,
  TOrdemProducaoOperacaoTurnoArgs,
  TOrdemProducaoOperacaoTurnoResp,
} from "./ordem-producao-operacao.type";
//#endregion

type TOrdemProducaoOperacaoStore = {
  fetching: boolean;
  argsList: Parameters<TOrdemProducaoOperacaoList>[0];
  refreshList: () => Promise<void>;
  dataList: TOrdemProducaoOperacao[];
  getList: TOrdemProducaoOperacaoList;
  dataRead: TOrdemProducaoOperacao;
  getRead: TOrdemProducaoOperacaoRead;
  dataSchema: TFieldClient[];
  getSchema: TOrdemProducaoOperacaoSchema;
  dataClear: TOrdemProducaoOperacao;
  getClear: TOrdemProducaoOperacaoClear;
  setCreate: TOrdemProducaoOperacaoCreate;
  setUpdate: TOrdemProducaoOperacaoUpdate;
  setDel: TOrdemProducaoOperacaoDel;
  //#region type
  dataDiarioSchema: TFieldClient[];
  getDiarioSchema: () => Promise<TFieldClient[]>;

  dataDiario: TOrdemProducaoOperacaoDiarioResp;
  getDiario: (
    args: TOrdemProducaoOperacaoDiarioArgs
  ) => Promise<TOrdemProducaoOperacaoDiarioResp>;

  dataMensalSchema: TFieldClient[];
  getMensalSchema: () => Promise<TFieldClient[]>;

  dataMensal: TOrdemProducaoOperacaoMensalResp;
  getMensal: (
    args: TOrdemProducaoOperacaoMensalArgs
  ) => Promise<TOrdemProducaoOperacaoMensalResp>;

  dataProdutoSchema: TFieldClient[];
  getProdutoSchema: () => Promise<TFieldClient[]>;

  dataProduto: TOrdemProducaoOperacaoProdutoResp;
  getProduto: (
    args: TOrdemProducaoOperacaoProdutoArgs
  ) => Promise<TOrdemProducaoOperacaoProdutoResp>;

  dataModeloSchema: TFieldClient[];
  getModeloSchema: () => Promise<TFieldClient[]>;

  dataModelo: TOrdemProducaoOperacaoModeloResp;
  getModelo: (
    args: TOrdemProducaoOperacaoModeloArgs
  ) => Promise<TOrdemProducaoOperacaoModeloResp>;

  dataTurnoSchema: TFieldClient[];
  getTurnoSchema: () => Promise<TFieldClient[]>;

  dataTurno: TOrdemProducaoOperacaoTurnoResp;
  getTurno: (
    args: TOrdemProducaoOperacaoTurnoArgs
  ) => Promise<TOrdemProducaoOperacaoTurnoResp>;

  //#endregion
};

export const ordemProducaoOperacaoStore = create<TOrdemProducaoOperacaoStore>(
  (set, get) => ({
    fetching: false,
    argsList: {},
    async refreshList() {
      cache.clear({ key: "ordemProducaoOperacaoList" });
      get().getList(get().argsList);
    },
    dataList: [],
    async getList(args) {
      set({ fetching: true, argsList: args });
      const data = await ordemProducaoOperacaoService.query.list(args);
      set({ dataList: data });
      set({ fetching: false });
      return data;
    },

    dataRead: {},
    async getRead(args) {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.read(args);
      set({ dataRead: data });
      set({ fetching: false });
      return data;
    },

    dataSchema: [],
    async getSchema() {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.schema();
      set({ dataSchema: data });
      set({ fetching: false });
      return data;
    },

    dataClear: {},
    async getClear() {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.clear();
      set({ dataClear: data });
      set({ fetching: false });
      return data;
    },

    async setCreate(args) {
      return ordemProducaoOperacaoService.mutation.create(args);
    },
    async setUpdate(args) {
      return ordemProducaoOperacaoService.mutation.update(args);
    },
    async setDel(args) {
      return ordemProducaoOperacaoService.mutation.del(args);
    },
    //#region store
    dataDiarioSchema: [],
    getDiarioSchema: async () => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.diarioSchema();
      set({ dataDiarioSchema: data });
      set({ fetching: false });
      return data;
    },

    dataDiario: [],
    getDiario: async (args) => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.diario(args);
      set({ dataDiario: data });
      set({ fetching: false });
      return data;
    },

    dataMensalSchema: [],
    getMensalSchema: async () => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.mensalSchema();
      set({ dataMensalSchema: data });
      set({ fetching: false });
      return data;
    },

    dataMensal: [],
    getMensal: async (args) => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.mensal(args);
      set({ dataMensal: data });
      set({ fetching: false });
      return data;
    },

    dataProdutoSchema: [],
    getProdutoSchema: async () => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.produtoSchema();
      set({ dataProdutoSchema: data });
      set({ fetching: false });
      return data;
    },

    dataProduto: [],
    getProduto: async (args) => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.produto(args);
      set({ dataProduto: data });
      set({ fetching: false });
      return data;
    },

    dataModeloSchema: [],
    getModeloSchema: async () => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.modeloSchema();
      set({ dataModeloSchema: data });
      set({ fetching: false });
      return data;
    },

    dataModelo: [],
    getModelo: async (args) => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.modelo(args);
      set({ dataModelo: data });
      set({ fetching: false });
      return data;
    },

    dataTurnoSchema: [],
    getTurnoSchema: async () => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.turnoSchema();
      set({ dataTurnoSchema: data });
      set({ fetching: false });
      return data;
    },

    dataTurno: [],
    getTurno: async (args) => {
      set({ fetching: true });
      const data = await ordemProducaoOperacaoService.query.turno(args);
      set({ dataTurno: data });
      set({ fetching: false });
      return data;
    },

    //#endregion
  })
);

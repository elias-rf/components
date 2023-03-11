import { create } from "zustand";
import { TFieldClient } from "../../types";
import { cache } from "../../utils/cache";
import type {
  TNfSaida,
  TNfSaidaClear,
  TNfSaidaCreate,
  TNfSaidaDel,
  TNfSaidaList,
  TNfSaidaRead,
  TNfSaidaSchema,
  TNfSaidaUpdate,
} from "./nf-saida.type";
//#region import
import { nfSaidaService } from "./nf-saida.service";
import type {
  TNfTransferenciaDiario,
  TNfTransferenciaMensal,
  TNfTransferenciaModelo,
  TNfVendaDiario,
  TNfVendaMensalCliente,
  TProdutoQtd,
} from "./nf-saida.type";
//#endregion

type TNfSaidaStore = {
  fetching: boolean;
  argsList: Parameters<TNfSaidaList>[0];
  refreshList: () => Promise<void>;
  dataList: TNfSaida[];
  getList: TNfSaidaList;
  dataRead: TNfSaida;
  getRead: TNfSaidaRead;
  dataSchema: TFieldClient[];
  getSchema: TNfSaidaSchema;
  dataClear: TNfSaida;
  getClear: TNfSaidaClear;
  setCreate: TNfSaidaCreate;
  setUpdate: TNfSaidaUpdate;
  setDel: TNfSaidaDel;
  //#region type
  dataTransferenciaDiario: ({ dia: string } & TProdutoQtd)[];
  getTransferenciaDiario: TNfTransferenciaDiario;

  dataTransferenciaDiarioSchema: TFieldClient[];
  getTransferenciaDiarioSchema: () => Promise<TFieldClient[]>;

  dataTransferenciaMensal: ({ mes: string } & TProdutoQtd)[];
  getTransferenciaMensal: TNfTransferenciaMensal;

  dataTransferenciaMensalSchema: TFieldClient[];
  getTransferenciaMensalSchema: () => Promise<TFieldClient[]>;

  dataTransferenciaModelo: { modelo: string; quantidade: number }[];
  getTransferenciaModelo: TNfTransferenciaModelo;

  dataTransferenciaModeloSchema: TFieldClient[];
  getTransferenciaModeloSchema: () => Promise<TFieldClient[]>;

  dataVendaDiario: {
    NmCategoria: string;
    DtEmissao: string;
    quantidade: number;
    valor: number;
  }[];
  getVendaDiario: TNfVendaDiario;

  dataVendaDiarioSchema: TFieldClient[];
  getVendaDiarioSchema: () => Promise<TFieldClient[]>;

  dataVendaMensalCliente: {
    NmCategoria: string;
    CdCliente: number;
    anoMes: string;
    quantidade: number;
    valor: number;
  }[];
  getVendaMensalCliente: TNfVendaMensalCliente;

  dataVendaMensalSchema: TFieldClient[];
  getVendaMensalSchema: () => Promise<TFieldClient[]>;

  dataVendaAnalitico: TNfSaida[];
  getVendaAnalitico: (args: { inicio: string; fim: string }) => Promise<any[]>;

  dataVendaAnaliticoSchema: TFieldClient[];
  getVendaAnaliticoSchema: () => Promise<TFieldClient[]>;
  //#endregion
};

export const nfSaidaStore = create<TNfSaidaStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "nfSaidaList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await nfSaidaService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await nfSaidaService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await nfSaidaService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await nfSaidaService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return nfSaidaService.mutation.create(args);
  },
  async setUpdate(args) {
    return nfSaidaService.mutation.update(args);
  },
  async setDel(args) {
    return nfSaidaService.mutation.del(args);
  },
  //#region store
  dataTransferenciaDiario: [],
  async getTransferenciaDiario(args) {
    set({ fetching: true });
    const data = await nfSaidaService.query.transferenciaDiario(args);
    set({ dataTransferenciaDiario: data });
    set({ fetching: false });
    return data;
  },

  dataTransferenciaDiarioSchema: [],
  async getTransferenciaDiarioSchema() {
    set({ fetching: true });
    const data = await nfSaidaService.query.transferenciaDiarioSchema();
    set({ dataTransferenciaDiarioSchema: data });
    set({ fetching: false });
    return data;
  },

  dataTransferenciaMensal: [],
  async getTransferenciaMensal(args) {
    set({ fetching: true });
    const data = await nfSaidaService.query.transferenciaMensal(args);
    set({ dataTransferenciaMensal: data });
    set({ fetching: false });
    return data;
  },

  dataTransferenciaMensalSchema: [],
  async getTransferenciaMensalSchema() {
    set({ fetching: true });
    const data = await nfSaidaService.query.transferenciaMensalSchema();
    set({ dataTransferenciaMensalSchema: data });
    set({ fetching: false });
    return data;
  },

  dataTransferenciaModelo: [],
  async getTransferenciaModelo(args) {
    set({ fetching: true });
    const data = await nfSaidaService.query.transferenciaModelo(args);
    set({ dataTransferenciaModelo: data });
    set({ fetching: false });
    return data;
  },

  dataTransferenciaModeloSchema: [],
  async getTransferenciaModeloSchema() {
    set({ fetching: true });
    const data = await nfSaidaService.query.transferenciaModeloSchema();
    set({ dataTransferenciaModeloSchema: data });
    set({ fetching: false });
    return data;
  },

  dataVendaDiario: [],
  async getVendaDiario(args) {
    set({ fetching: true });
    const data = await nfSaidaService.query.vendaDiario(args);
    set({ dataVendaDiario: data });
    set({ fetching: false });
    return data;
  },

  dataVendaDiarioSchema: [],
  async getVendaDiarioSchema() {
    set({ fetching: true });
    const data = await nfSaidaService.query.vendaDiarioSchema();
    set({ dataVendaDiarioSchema: data });
    set({ fetching: false });
    return data;
  },

  dataVendaMensalCliente: [],
  async getVendaMensalCliente(args) {
    set({ fetching: true });
    const data = await nfSaidaService.query.vendaMensalCliente(args);
    set({ dataVendaMensalCliente: data });
    set({ fetching: false });
    return data;
  },

  dataVendaMensalSchema: [],
  async getVendaMensalSchema() {
    set({ fetching: true });
    const data = await nfSaidaService.query.vendaMensalClienteSchema();
    set({ dataVendaMensalSchema: data });
    set({ fetching: false });
    return data;
  },

  dataVendaAnalitico: [],
  async getVendaAnalitico(args) {
    set({ fetching: true });
    const data = await nfSaidaService.query.vendaAnalitico(args);
    set({ dataVendaAnalitico: data });
    set({ fetching: false });
    return data;
  },

  dataVendaAnaliticoSchema: [],
  async getVendaAnaliticoSchema() {
    set({ fetching: true });
    const data = await nfSaidaService.query.vendaAnaliticoSchema();
    set({ dataVendaAnaliticoSchema: data });
    set({ fetching: false });
    return data;
  },
  //#endregion
}));

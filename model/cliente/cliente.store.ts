import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import type {
  TCliente,
  TClienteClear,
  TClienteCreate,
  TClienteDel,
  TClienteList,
  TClienteRead,
  TClienteSchema,
  TClienteUpdate,
} from "./cliente.type";
//#region import
import { clienteService } from "./cliente.service";
import type { TPeriodo } from "./cliente.type";
//#endregion

type TClienteStore = {
  fetching: boolean;
  argsList: Parameters<TClienteList>[0];
  refreshList: () => Promise<void>;
  dataList: TCliente[];
  getList: TClienteList;
  dataRead: TCliente;
  getRead: TClienteRead;
  dataSchema: TField[];
  getSchema: TClienteSchema;
  dataClear: TCliente;
  getClear: TClienteClear;
  setCreate: TClienteCreate;
  setUpdate: TClienteUpdate;
  setDel: TClienteDel;
  //#region type
  dataVendaMensalQuantidadeSchema: any[];
  getVendaMensalQuantidadeSchema(args: TPeriodo): Promise<TField[]>;

  dataVendaMensalQuantidade: any[];
  getVendaMensalQuantidade(args: TPeriodo & { cliente: number }): Promise<any>;

  dataVendaMensalValorSchema: any[];
  getVendaMensalValorSchema(args: TPeriodo): Promise<TField[]>;

  dataVendaMensalValor: any[];
  getVendaMensalValor(args: TPeriodo & { cliente: number }): Promise<any>;

  dataVendaMensalValorMedioSchema: any[];
  getVendaMensalValorMedioSchema(args: TPeriodo): Promise<TField[]>;

  dataVendaMensalValorMedio: any[];
  getVendaMensalValorMedio(args: TPeriodo & { cliente: number }): Promise<any>;
  //#endregion
};

export const clienteStore = create<TClienteStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "clienteList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await clienteService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await clienteService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await clienteService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await clienteService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return clienteService.mutation.create(args);
  },
  async setUpdate(args) {
    return clienteService.mutation.update(args);
  },
  async setDel(args) {
    return clienteService.mutation.del(args);
  },
  //#region store
  dataVendaMensalQuantidadeSchema: [],
  async getVendaMensalQuantidadeSchema(args) {
    set({ fetching: true });
    const data = await clienteService.query.vendaMensalQuantidadeSchema(args);
    set({ dataVendaMensalQuantidadeSchema: data });
    set({ fetching: false });
    return data;
  },

  dataVendaMensalQuantidade: [],
  async getVendaMensalQuantidade(args) {
    set({ fetching: true });
    const data = await clienteService.query.vendaMensalQuantidade(args);
    set({ dataVendaMensalQuantidade: data });
    set({ fetching: false });
    return data;
  },

  dataVendaMensalValorSchema: [],
  async getVendaMensalValorSchema(args) {
    set({ fetching: true });
    const data = await clienteService.query.vendaMensalValorSchema(args);
    set({ dataVendaMensalValorSchema: data });
    set({ fetching: false });
    return data;
  },

  dataVendaMensalValor: [],
  async getVendaMensalValor(args) {
    set({ fetching: true });
    const data = await clienteService.query.vendaMensalValor(args);
    set({ dataVendaMensalValor: data });
    set({ fetching: false });
    return data;
  },
  dataVendaMensalValorMedioSchema: [],
  async getVendaMensalValorMedioSchema(args) {
    set({ fetching: true });
    const data = await clienteService.query.vendaMensalValorMedioSchema(args);
    set({ dataVendaMensalValorMedioSchema: data });
    set({ fetching: false });
    return data;
  },

  dataVendaMensalValorMedio: [],
  async getVendaMensalValorMedio(args) {
    set({ fetching: true });
    const data = await clienteService.query.vendaMensalValorMedio(args);
    set({ dataVendaMensalValorMedio: data });
    set({ fetching: false });
    return data;
  },
  //#endregion
}));

import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { nfEntradaService } from "./nf-entrada.service";
import type {
  TNfEntrada,
  TNfEntradaClear,
  TNfEntradaCreate,
  TNfEntradaDel,
  TNfEntradaList,
  TNfEntradaRead,
  TNfEntradaSchema,
  TNfEntradaUpdate,
} from "./nf-entrada.type";
//#region import
//#endregion

type TNfEntradaStore = {
  fetching: boolean;
  argsList: Parameters<TNfEntradaList>[0];
  refreshList: () => Promise<void>;
  dataList: TNfEntrada[];
  getList: TNfEntradaList;
  dataRead: TNfEntrada;
  getRead: TNfEntradaRead;
  dataSchema: TFieldDef[];
  getSchema: TNfEntradaSchema;
  dataClear: TNfEntrada;
  getClear: TNfEntradaClear;
  setCreate: TNfEntradaCreate;
  setUpdate: TNfEntradaUpdate;
  setDel: TNfEntradaDel;
  //#region type
  setTransferenciaCreate: (args: { controles: string[] }) => Promise<boolean>;
  //#endregion
};

export const nfEntradaStore = create<TNfEntradaStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "nfEntradaList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await nfEntradaService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await nfEntradaService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await nfEntradaService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await nfEntradaService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return nfEntradaService.mutation.create(args);
  },
  async setUpdate(args) {
    return nfEntradaService.mutation.update(args);
  },
  async setDel(args) {
    return nfEntradaService.mutation.del(args);
  },
  //#region store
  async setTransferenciaCreate(args) {
    return nfEntradaService.mutation.transferenciaCreate(args);
  },
  //#endregion
}));

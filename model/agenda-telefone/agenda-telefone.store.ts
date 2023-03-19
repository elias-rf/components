import { create } from "zustand";
import { TFieldDef } from "../../types/model";
import { cache } from "../../utils/cache";
import { agendaTelefoneService } from "./agenda-telefone.service";
import type {
  TAgendaTelefone,
  TAgendaTelefoneClear,
  TAgendaTelefoneCreate,
  TAgendaTelefoneDel,
  TAgendaTelefoneList,
  TAgendaTelefoneRead,
  TAgendaTelefoneSchema,
  TAgendaTelefoneUpdate,
} from "./agenda-telefone.type";
//#region import
//#endregion

type TAgendaTelefoneStore = {
  fetching: boolean;
  argsList: Parameters<TAgendaTelefoneList>[0];
  refreshList: () => Promise<void>;
  dataList: TAgendaTelefone[];
  getList: TAgendaTelefoneList;
  dataRead: TAgendaTelefone;
  getRead: TAgendaTelefoneRead;
  dataSchema: TFieldDef[];
  getSchema: TAgendaTelefoneSchema;
  dataClear: TAgendaTelefone;
  getClear: TAgendaTelefoneClear;
  setCreate: TAgendaTelefoneCreate;
  setUpdate: TAgendaTelefoneUpdate;
  setDel: TAgendaTelefoneDel;
  //#region type
  //#endregion
};

export const agendaTelefoneStore = create<TAgendaTelefoneStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "agendaTelefoneList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await agendaTelefoneService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await agendaTelefoneService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await agendaTelefoneService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await agendaTelefoneService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return agendaTelefoneService.mutation.create(args);
  },
  async setUpdate(args) {
    return agendaTelefoneService.mutation.update(args);
  },
  async setDel(args) {
    return agendaTelefoneService.mutation.del(args);
  },
  //#region store
  //#endregion
}));

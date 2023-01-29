import { create } from "zustand";
import { TFieldClient } from "../../types";
import type {
  TAgendaTelefone,
  TAgendaTelefoneClear,
  TAgendaTelefoneList,
  TAgendaTelefoneRead,
  TAgendaTelefoneSchema,
} from "../../types/agenda-telefone.type";
import { cache } from "../../utils/cache";
import { agendaTelefoneService } from "../service/agenda-telefone.service";

const SERVICE = "agendaTelefone";

type TAgendaTelefoneStore = {
  dataList: TAgendaTelefone[];
  dataRead: TAgendaTelefone;
  dataSchema: TFieldClient[];
  dataClear: TAgendaTelefone;
  fetching: boolean;
  argsList: Parameters<TAgendaTelefoneList>[0];
  refreshList: () => Promise<void>;
  getList: TAgendaTelefoneList;
  getRead: TAgendaTelefoneRead;
  getSchema: TAgendaTelefoneSchema;
  getClear: TAgendaTelefoneClear;
};

export const agendaTelefoneStore = create<TAgendaTelefoneStore>((set, get) => ({
  dataList: [],
  dataRead: {},
  dataSchema: [],
  dataClear: {},
  fetching: false,
  argsList: {},
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await agendaTelefoneService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },
  async refreshList() {
    cache.clear({ key: `${SERVICE}.list` });
    get().getList(get().argsList);
  },
  async getRead(args) {
    set({ fetching: true });
    const data = await agendaTelefoneService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },
  async getSchema() {
    set({ fetching: true });
    const data = await agendaTelefoneService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },
  async getClear() {
    set({ fetching: true });
    const data = await agendaTelefoneService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },
}));

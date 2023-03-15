import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import type {
  TGroupSubject,
  TGroupSubjectClear,
  TGroupSubjectCreate,
  TGroupSubjectDel,
  TGroupSubjectList,
  TGroupSubjectRead,
  TGroupSubjectSchema,
  TGroupSubjectUpdate,
} from "./group-subject.type";
//#region import
import { groupSubjectService } from "./group-subject.service";
import type { TGroupSubjectCan } from "./group-subject.type";
//#endregion

type TGroupSubjectStore = {
  fetching: boolean;
  argsList: Parameters<TGroupSubjectList>[0];
  refreshList: () => Promise<void>;
  dataList: TGroupSubject[];
  getList: TGroupSubjectList;
  dataRead: TGroupSubject;
  getRead: TGroupSubjectRead;
  dataSchema: TField[];
  getSchema: TGroupSubjectSchema;
  dataClear: TGroupSubject;
  getClear: TGroupSubjectClear;
  setCreate: TGroupSubjectCreate;
  setUpdate: TGroupSubjectUpdate;
  setDel: TGroupSubjectDel;
  //#region type
  dataCan: boolean;
  getCan: TGroupSubjectCan;
  //#endregion
};

export const groupSubjectStore = create<TGroupSubjectStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "groupSubjectList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await groupSubjectService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await groupSubjectService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await groupSubjectService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await groupSubjectService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return groupSubjectService.mutation.create(args);
  },
  async setUpdate(args) {
    return groupSubjectService.mutation.update(args);
  },
  async setDel(args) {
    return groupSubjectService.mutation.del(args);
  },
  //#region store
  dataCan: false,
  async getCan(args) {
    set({ fetching: true });
    const data = await groupSubjectService.query.can(args);
    set({ dataCan: data });
    set({ fetching: false });
    return data;
  },
  //#endregion
}));

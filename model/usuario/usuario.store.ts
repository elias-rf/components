import { create } from "zustand";
import { TField } from "../../types/model";
import { cache } from "../../utils/cache";
import type {
  TUsuario,
  TUsuarioClear,
  TUsuarioCreate,
  TUsuarioDel,
  TUsuarioList,
  TUsuarioRead,
  TUsuarioSchema,
  TUsuarioUpdate,
} from "./usuario.type";
//#region import
import { TCurrentUser } from "../../types";
import { usuarioService } from "./usuario.service";

//#endregion

type TUsuarioStore = {
  fetching: boolean;
  argsList: Parameters<TUsuarioList>[0];
  refreshList: () => Promise<void>;
  dataList: TUsuario[];
  getList: TUsuarioList;
  dataRead: TUsuario;
  getRead: TUsuarioRead;
  dataSchema: TField[];
  getSchema: TUsuarioSchema;
  dataClear: TUsuario;
  getClear: TUsuarioClear;
  setCreate: TUsuarioCreate;
  setUpdate: TUsuarioUpdate;
  setDel: TUsuarioDel;
  //#region type
  isAuthenticated: boolean;
  currentUser: TCurrentUser;
  getMe(): Promise<TCurrentUser>;
  setLogin(args: { user: string; password: string }): Promise<TCurrentUser>;
  setLogout(): Promise<boolean>;
  //#endregion
};

export const usuarioStore = create<TUsuarioStore>((set, get) => ({
  fetching: false,
  argsList: {},
  async refreshList() {
    cache.clear({ key: "usuarioList" });
    get().getList(get().argsList);
  },
  dataList: [],
  async getList(args) {
    set({ fetching: true, argsList: args });
    const data = await usuarioService.query.list(args);
    set({ dataList: data });
    set({ fetching: false });
    return data;
  },

  dataRead: {},
  async getRead(args) {
    set({ fetching: true });
    const data = await usuarioService.query.read(args);
    set({ dataRead: data });
    set({ fetching: false });
    return data;
  },

  dataSchema: [],
  async getSchema() {
    set({ fetching: true });
    const data = await usuarioService.query.schema();
    set({ dataSchema: data });
    set({ fetching: false });
    return data;
  },

  dataClear: {},
  async getClear() {
    set({ fetching: true });
    const data = await usuarioService.query.clear();
    set({ dataClear: data });
    set({ fetching: false });
    return data;
  },

  async setCreate(args) {
    return usuarioService.mutation.create(args);
  },
  async setUpdate(args) {
    return usuarioService.mutation.update(args);
  },
  async setDel(args) {
    return usuarioService.mutation.del(args);
  },
  //#region store
  isAuthenticated: false,
  currentUser: {},

  async getMe() {
    // const me = await usuarioService.query.me();
    // let response = false;
    // if (me !== undefined && me.usuario_id !== undefined && me.usuario_id > 0)
    //   response = true;
    // set({ isAuthenticated: response, currentUser: me });
    return get().currentUser;
  },

  async setLogin(args) {
    const me = await usuarioService.mutation.login(args);
    let isAuthenticated = false;
    if (me !== undefined && me.usuario_id !== undefined && me.usuario_id > 0)
      isAuthenticated = true;
    set({ isAuthenticated, currentUser: me || {} });
    return me;
  },

  async setLogout() {
    const response = await usuarioService.mutation.logout();
    set({ isAuthenticated: false, currentUser: {} });
    return response;
  },
  //#endregion
}));

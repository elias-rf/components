import { create } from "zustand";
import { TCurrentUser } from "../../types";
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
import { isEmpty } from "../../utils/identify/is_empty";

type TAuthenticationRpc = {
  query: {
    me(): Promise<TCurrentUser>;
    isAuthenticated(): Promise<boolean>;
  };
  mutation: {
    login(args: { user: string; password: string }): Promise<TCurrentUser>;
    logout(): Promise<boolean>;
  };
};

function setStore(currentUser: TCurrentUser) {
  authenticationStore.setState({
    currentUser,
    isAuthenticated: currentUser.usuario_id > 0,
  });
}

/** api de autenticação do usuário */
export const authenticationService: TAuthenticationRpc = {
  query: {
    async isAuthenticated(): Promise<boolean> {
      const user = await cache.fetch({
        key: "authMe",
        callback: fetcherRpc.query,
        args: ["usuarioMe"],
        expiresInSeconds: 2,
      });
      setStore(user);
      if (isEmpty(user)) return false;
      return user.usuario_id !== 0;
    },
    async me(): Promise<TCurrentUser> {
      const currentUser = await cache.fetch({
        key: "authMe",
        callback: fetcherRpc.query,
        args: ["usuarioMe"],
        expiresInSeconds: 2,
      });
      setStore(currentUser);
      return currentUser;
    },
  },
  mutation: {
    async login(args): Promise<TCurrentUser> {
      cache.clear({ key: "authMe" });
      const currentUser = await fetcherRpc.mutation("usuarioLogin", args);
      setStore(currentUser);
      return currentUser;
    },
    async logout() {
      cache.clear({ key: "auth.me" });
      const rsp = await fetcherRpc.mutation("usuarioLogout");
      if (rsp) {
        const currentUser = {
          group_id: "",
          usuario_id: 0,
          nome: "",
          nome_login: "",
        };
        setStore(currentUser);
      }
      return rsp;
    },
  },
};

export type TAuthenticationStore = {
  isAuthenticated: boolean;
  currentUser: TCurrentUser;
  fetching: boolean;
  getIsAuthenticated: () => Promise<boolean>;
  getMe: () => Promise<TCurrentUser>;
};

export const authenticationStore = create<TAuthenticationStore>()((set) => ({
  isAuthenticated: false,
  currentUser: {
    usuario_id: 0,
    nome_login: "",
    nome: "",
    group_id: "",
    token: "",
  },
  fetching: false,
  async getIsAuthenticated() {
    set({ fetching: true });
    const data = await authenticationService.query.isAuthenticated();
    set({ isAuthenticated: data });
    set({ fetching: false });
    return data;
  },
  async getMe() {
    set({ fetching: true });
    const data = await authenticationService.query.me();
    set({ currentUser: data });
    set({ fetching: false });
    return data;
  },
}));

authenticationService.query.me();

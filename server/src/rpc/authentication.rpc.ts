import type { CurrentUser, RpcContext } from "@er/types";
import type { Connections } from "../dal/connections";
import { UsuarioModel } from "../model/oftalmo/usuario.model";

export interface AuthenticationRpc {
  login(args: { user: string; password: string }): Promise<CurrentUser>;
  logout(): Promise<Boolean>;
  me(_: void, ctx?: RpcContext): Promise<CurrentUser>;
}

export function Authentication(connections: Connections): AuthenticationRpc {
  return {
    // LOGIN
    async login({ user, password }) {
      const usuario = new UsuarioModel(connections);
      return usuario.login(user, password);
    },

    // LOGOUT
    async logout() {
      return true;
    },

    // ME
    async me(_: void, ctx): Promise<CurrentUser> {
      return (
        ctx?.currentUser || {
          idGroup: "",
          kUsuario: "",
          nome: "",
          NomeUsuario: "",
        }
      );
    },
  };
}

import type { CurrentUser, RpcContext } from "@er/types";
import type { TConnections } from "../dal/connections";
import { UsuarioModel } from "../model";

export interface TAuthenticationRpc {
  login(args: { user: string; password: string }): Promise<CurrentUser>;
  logout(): Promise<boolean>;
  me(_: void, ctx?: RpcContext): Promise<CurrentUser>;
}

export function authenticationRpc(
  connections: TConnections
): TAuthenticationRpc {
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

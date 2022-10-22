import type { CurrentUser } from "../../../types";
import { RpcContext } from "../../../types";
import { TConnections } from "../../dal/connections";
import { usuarioModel } from "../usuario/usuario.model";

export type TUsuarioRpc = ReturnType<typeof usuarioRpc>;

export function usuarioRpc(connections: TConnections) {
  const usuario = usuarioModel(connections);

  return {
    // LOGIN
    async login(args: {
      user: string;
      password: string;
    }): Promise<CurrentUser> {
      return usuario.login(args);
    },

    // LOGOUT
    async logout(): Promise<boolean> {
      return true;
    },

    // ME
    async me(_: void, ctx: RpcContext): Promise<CurrentUser> {
      return (
        ctx?.currentUser || {
          group_id: "",
          usuario_id: 0,
          nome: "",
          nome_login: "",
        }
      );
    },
  };
}

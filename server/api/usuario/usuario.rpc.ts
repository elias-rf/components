import type { TConnections, TCurrentUser } from "../../../types";
import { TRpcContext } from "../../../types";
import { usuarioModel } from "../usuario/usuario.model";

export type TUsuarioRpc = ReturnType<typeof usuarioRpc>;

export function usuarioRpc(connections: TConnections) {
  const usuario = usuarioModel(connections);

  return {
    mutation: {
      // LOGIN
      // prettier-ignore
      async login({ user, password }: {
      user: string;
      password: string;
      }, ): Promise<TCurrentUser> {
        return usuario.login({ user, password });
      },

      // LOGOUT
      async logout(): Promise<boolean> {
        return true;
      },
    },
    query: {
      // ME
      async me(_: void, ctx: TRpcContext): Promise<TCurrentUser> {
        return (
          ctx?.currentUser || {
            group_id: "",
            usuario_id: 0,
            nome: "",
            nome_login: "",
          }
        );
      },
    },
  };
}

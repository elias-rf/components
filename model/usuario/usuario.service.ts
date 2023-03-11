import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TUsuarioRpc } from "./usuario.type";
//#region import
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
import { TUsuario } from "./usuario.type";
//#endregion

export const usuarioService = deepmerge(rpcFactory("usuario"), {
  //#region service
  query: {
    async me(): Promise<TUsuario> {
      const currentUser = await cache.fetch({
        key: "usuarioMe",
        callback: fetcherRpc.query,
        args: ["usuarioMe"],
        expiresInSeconds: 2,
      });
      return currentUser;
    },
  },
  mutation: {
    async login(args: { user: string; password: string }): Promise<TUsuario> {
      cache.clear({ key: "usuarioMe" });
      const currentUser = await fetcherRpc.mutation("usuarioLogin", args);
      sessionStorage.setItem("token", currentUser.token);
      return currentUser;
    },
    async logout() {
      cache.clear({ key: "usuarioMe" });
      const rsp = await fetcherRpc.mutation("usuarioLogout");
      sessionStorage.removeItem("token");
      return rsp;
    },
  },
  //#endregion
} as TUsuarioRpc);

//#region other
//#endregion

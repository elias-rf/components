import { TUsuarioRecord } from "@er/server/src/model/oftalmo/usuario.model";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TUsuarioRecord };

export const usuarioService = {
  ...rpcFactory<TUsuarioRecord>("usuario"),

  clear() {
    return {
      kUsuario: "",
      NomeUsuario: "",
      idGroup: "",
      nome: "",
      Ativo: 1,
    };
  },
};

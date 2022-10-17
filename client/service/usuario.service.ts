import { TUsuario } from "../../types/usuario.type";
import { rpcFactory } from "../lib/http/rpc.factory";

export type { TUsuario };

export const usuarioService = {
  ...rpcFactory<TUsuario>("usuario"),

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

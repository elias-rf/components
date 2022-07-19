import { rpcFactory } from "../lib/http/rpc.factory";

export type UsuarioRecord = {
  kUsuario: string;
  NomeUsuario: string;
  nome: string;
  idGroup: string;
  Ativo: number;
};

export const usuarioService = {
  ...rpcFactory("usuario"),

  clear: (): UsuarioRecord => {
    return {
      kUsuario: "",
      NomeUsuario: "",
      idGroup: "",
      nome: "",
      Ativo: 1,
    };
  },
};

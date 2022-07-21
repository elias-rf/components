import type { CurrentUser, RpcContext } from "../../../types";

import { config } from "../config/index";
import type { Connections } from "../dal/connections";
import jwtEncode from "../lib/jwt-encode";
import passwordVerify from "../lib/password-verify";

export interface AuthenticationRpc {
  login(args: { user: string; password: string }): Promise<CurrentUser>;
  logout(): Promise<Boolean>;
  me(_: void, ctx?: RpcContext): Promise<CurrentUser>;
}

export function Authentication(connections: Connections): AuthenticationRpc {
  return {
    // LOGIN
    async login({ user, password }: { user: string; password: string }) {
      let record: {
        kUsuario: string;
        NomeUsuario: string;
        Ativo: number;
        hash: string;
        nome: string;
        idGroup: string;
      };
      const knex = connections.oftalmo;

      if (!user) {
        throw new Error("Usuário não informado");
      }

      if (!password) {
        throw new Error("Senha não informada");
      }

      try {
        const rec = await knex("tbl_seguranca_usuario").where(
          "NomeUsuario",
          user
        );
        record = rec[0];
      } catch (err: any) {
        throw new Error(`erro de acesso ao banco de dados: ${err.message}`);
      }

      if (!record) {
        throw new Error("Usuário não cadastrado");
      }

      if (record.Ativo === 0) {
        throw new Error("Cadastro inativo");
      }

      const passOk = passwordVerify(password, record.hash, "sha256");
      if (!passOk) {
        throw new Error("Senha incorreta");
      }

      const resp: CurrentUser = {
        kUsuario: record.kUsuario,
        NomeUsuario: record.NomeUsuario,
        nome: record.nome,
        idGroup: record.idGroup,
      };
      resp.token = jwtEncode(resp, config.auth.secret, config.auth.expiration);
      return resp;
    },

    // LOGOUT
    async logout() {
      return true;
    },

    // ME
    async me(_: void, ctx?: RpcContext): Promise<CurrentUser> {
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

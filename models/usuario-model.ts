import { config } from "@/config";
import { Usuario } from "@/database";
import type { TCurrentUser } from "@/types";
import { CrudObjection } from "@/models/utils/crud-objection";
import { day } from "@/utils/date/day";
import { passwordVerify } from "@/utils/string/password-verify";
import type { TUsuario } from "./others/usuario.type";

class UsuarioModel extends CrudObjection {
  constructor() {
    super(Usuario);
  }

  async me(ctx: any) {
    const resp = ctx.req.user;
    if (resp && resp.iat) {
      resp.iat = day.unix(resp.iat).format("YYYY-MM-DDTHH:mm:ss");
      resp.exp = day.unix(resp.exp).format("YYYY-MM-DDTHH:mm:ss");
    }
    return (resp as TCurrentUser) || "NOT_LOGGED";
  }

  async logout(ctx: any) {
    ctx.res.clearCookie("token", { path: "/" });
    return true;
  }

  async login(
    { user, password }: { user: string; password: string },
    ctx: any
  ) {
    let record: TUsuario;
    if (!user) {
      throw new Error("Usuário não informado");
    }

    if (!password) {
      throw new Error("Senha não informada");
    }

    try {
      const rec = await this.list({
        filter: { NomeUsuario: user },
      });
      record = rec[0];
    } catch (err: any) {
      throw new Error(`erro de acesso ao banco de dados: ${err.message}`);
    }

    if (!record) {
      throw new Error("Usuário não cadastrado");
    }

    if (record.is_ativo === 0) {
      throw new Error("Cadastro inativo");
    }

    const passOk = passwordVerify(password, record.hash || "", "sha256");
    if (!passOk) {
      throw new Error("Senha incorreta");
    }

    const resp: TCurrentUser = {
      usuario_id: record.usuario_id || 0,
      nome_login: record.nome_login || "",
      nome: record.nome || "",
      group_id: record.group_id || "",
    };
    resp.token = await ctx.res.jwtSign(resp);

    ctx.res.setCookie("token", resp.token, {
      maxAge: config.auth.expiration,
      path: "/",
    });
    return resp;
  }
}

export const usuarioModel = new UsuarioModel();

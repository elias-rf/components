import { config } from "@/config";
import type { TConnections } from "@/config/connections";
import { TModels } from "@/models/models";
import type { TCurrentUser } from "@/types";
import { CrudModel } from "@/utils/crud/crud-model";
import { day } from "@/utils/date/day";
import { passwordVerify } from "@/utils/string/password-verify";
import { Knex } from "knex";
import { usuario } from "./usuario.table";
import type { TUsuario } from "./usuario.type";

export class UsuarioModel extends CrudModel {
  connection: Knex<any, any[]>;
  models: TModels;

  constructor({
    connections,
    models,
  }: {
    connections: TConnections;
    models: TModels;
  }) {
    super(connections[usuario.database], usuario);
    this.models = models;
    this.connection = connections[usuario.database];
    models.usuario = this;
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
      const rec = await this.models.usuario.list({
        filter: { nome_login: user },
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

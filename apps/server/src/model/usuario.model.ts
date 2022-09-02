import { CurrentUser, Schema } from "@er/types";
import { config } from "../config";
import { TConnections } from "../dal/connections";
import jwtEncode from "../lib/jwt-encode";
import { passwordVerify } from "../lib/password-verify";
import { TUsuario } from "../type/usuario.type";
import { Entity } from "./entity";

export class UsuarioModel extends Entity<TUsuario> {
  constructor(connections: TConnections) {
    super(connections, "usuario");
  }

  async login({ user, password }: { user: string; password: string }) {
    let record: TUsuario;
    if (!user) {
      throw new Error("Usuário não informado");
    }

    if (!password) {
      throw new Error("Senha não informada");
    }

    try {
      const rec = await this.list({ where: [["nome_login", "=", user]] });
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

    const resp: CurrentUser = {
      usuario_id: record.usuario_id,
      nome_login: record.nome_login || "",
      nome: record.nome || "",
      grupo_id: record.grupo_id || "",
    };
    resp.token = jwtEncode(resp, config.auth.secret, config.auth.expiration);
    return resp;
  }

  async schema(): Promise<Schema> {
    return [
      {
        field: "kUsuario",
        name: "Código do usuário",
        type: "int",
      },
      {
        field: "NomeUsuario",
        name: "Login",
        type: "string",
      },
      {
        field: "idGroup",
        name: "Grupo de segurança",
        type: "string",
      },
      {
        field: "Ativo",
        name: "Cadastro ativo",
        type: "boolean",
      },
      {
        field: "nome",
        name: "Nome",
        type: "string",
      },
    ];
  }
}

import { CurrentUser, Schema } from "@er/types";
import { config } from "../config";
import { TConnections } from "../dal/connections";
import jwtEncode from "../lib/jwt-encode";
import { passwordVerify } from "../lib/password-verify";
import { EntityModel } from "./entity";

export type TUsuario = {
  kUsuario: string;
  NomeUsuario?: string;
  hash?: string;
  idGroup?: string;
  nome?: string;
  Ativo?: number;
};

export class UsuarioModel extends EntityModel<TUsuario> {
  constructor(connections: TConnections) {
    super(connections, "usuario");
  }

  async login(user: string, password: string) {
    let record: TUsuario;
    if (!user) {
      throw new Error("Usuário não informado");
    }

    if (!password) {
      throw new Error("Senha não informada");
    }

    try {
      const rec = await this.list([["NomeUsuario", "=", user]]);
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

    const passOk = passwordVerify(password, record.hash || "", "sha256");
    if (!passOk) {
      throw new Error("Senha incorreta");
    }

    const resp: CurrentUser = {
      kUsuario: record.kUsuario,
      NomeUsuario: record.NomeUsuario || "",
      nome: record.nome || "",
      idGroup: record.idGroup || "",
    };
    resp.token = jwtEncode(resp, config.auth.secret, config.auth.expiration);
    return resp;
  }

  async schema(): Promise<Schema> {
    return {
      id: ["kUsuario"],
      fields: [
        {
          field: "kUsuario",
          name: "Código do usuário",
          type: "ID",
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
      ],
    };
  }
}

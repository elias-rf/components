import { CurrentUser, Schema } from "types";
import { config } from "../../config";
import { Connections } from "../../dal/connections";
import jwtEncode from "../../lib/jwt-encode";
import passwordVerify from "../../lib/password-verify";
import { Model } from "../model";

export type UsuarioRecord = {
  kUsuario: string;
  NomeUsuario?: string;
  hash?: string;
  idGroup?: string;
  nome?: string;
  Ativo?: number;
};

export class UsuarioModel extends Model<UsuarioRecord> {
  constructor(connections: Connections) {
    super(
      connections.oftalmo,
      "usuario",
      "Tbl_Seguranca_Usuario",
      ["kUsuario"],
      ["kUsuario", "NomeUsuario", "hash", "idGroup", "nome", "Ativo"]
    );
  }

  async login(user: string, password: string) {
    let record: UsuarioRecord;
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
      pk: ["kUsuario"],
      fields: [
        {
          field: "kUsuario",
          label: "Código do usuário",
          type: "ID",
        },
        {
          field: "NomeUsuario",
          label: "Login",
          type: "string",
        },
        {
          field: "idGroup",
          label: "Grupo de segurança",
          type: "string",
        },
        {
          field: "Ativo",
          label: "Cadastro ativo",
          type: "boolean",
        },
        {
          field: "nome",
          label: "Nome",
          type: "string",
        },
      ],
    };
  }
}

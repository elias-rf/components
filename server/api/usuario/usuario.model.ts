import type {
  TConnections,
  TCurrentUser,
  TFieldClient,
  TGenericObject,
  TReadArgs,
} from "../../../types";
import type { TUsuario } from "../../../types/usuario.type";
import { config } from "../../config";
import { jwtEncode } from "../../lib/jwt-encode";
import { passwordVerify } from "../../lib/password-verify";
import { crudModel } from "../crud/crud.model";

export function usuarioModel(connections: TConnections) {
  const crud = crudModel(connections);

  return {
    async listSubject({
      id,
      select = crud.nameList({ table: "group_subject" }),
    }: TReadArgs): Promise<TGenericObject[]> {
      const group_id = await crud.read({
        table: "usuario",
        id,
        select: ["group_id"],
      });

      return crud.list({
        table: "group_subject",
        where: [["group_id", "=", group_id]],
        select,
      });
    },

    async login({ user, password }: { user: string; password: string }) {
      let record: TUsuario;
      if (!user) {
        throw new Error("Usuário não informado");
      }

      if (!password) {
        throw new Error("Senha não informada");
      }

      try {
        const rec = await crud.list({
          table: "usuario",
          where: [["nome_login", "=", user]],
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
      resp.token = jwtEncode(resp, config.auth.secret, config.auth.expiration);
      return resp;
    },

    async schema(): Promise<TFieldClient[]> {
      return [
        {
          name: "kUsuario",
          label: "Código do usuário",
          type: "int",
        },
        {
          name: "NomeUsuario",
          label: "Login",
          type: "string",
        },
        {
          name: "idGroup",
          label: "Grupo de segurança",
          type: "string",
        },
        {
          name: "Ativo",
          label: "Cadastro ativo",
          type: "boolean",
        },
        {
          name: "nome",
          label: "Nome",
          type: "string",
        },
      ];
    },
  };
}

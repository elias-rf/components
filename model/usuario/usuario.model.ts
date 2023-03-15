import { crudFactory } from "../../server/lib/crud/crud.factory";
import type { TConnections } from "../../types/model";
import { usuario } from "./usuario.table";
import type { TUsuarioModel } from "./usuario.type";
//#region import
import { config } from "../../server/config";
import { jwtEncode } from "../../server/lib/jwt-encode";
import { passwordVerify } from "../../server/lib/password-verify";
import type { TCurrentUser } from "../../types";
import type { TUsuario } from "./usuario.type";
//#endregion

export function usuarioModelFactory(
  //#region inject
  { connections }: { connections: TConnections }
): //#endregion
TUsuarioModel {
  const connection: TConnection = connections[usuario.database];
  const crud = crudFactory(connection, usuario);

  //#region def
  //#endregion

  const model = {
    query: {
      ...crud.query,
      //#region query
      async me() {
        return {};
      },
      //#endregion
    },
    mutation: {
      ...crud.mutation,
      //#region mutation
      async logout() {
        return true;
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
          const rec = await crud.query.list({
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
        resp.token = jwtEncode(
          resp,
          config.auth.secret,
          config.auth.expiration
        );
        return resp;
      },
      //#endregion
    },
    connection,
    usuario,
  } as TUsuarioModel;

  return model;
}

//#region other
//#endregion

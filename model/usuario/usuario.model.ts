import { config } from "../../server/config";
import { crudFactory } from "../../server/lib/crud/crud.factory";
import { jwtEncode } from "../../server/lib/jwt-encode";
import { passwordVerify } from "../../server/lib/password-verify";
import type { TCurrentUser } from "../../types";
import type { TConnection, TConnections } from "../../types/model";
import { setCookie } from "../../utils/network/cookie";
import { usuario } from "./usuario.table";
import type { TUsuario, TUsuarioModel } from "./usuario.type";

export function usuarioModelFactory({
  connections,
}: {
  connections: TConnections;
}): TUsuarioModel {
  const connection: TConnection = connections[usuario.database];
  const crud = crudFactory(connection, usuario);

  const model = {
    query: {
      ...crud.query,

      async me(ctx: any) {
        return ctx.req.context.currentUser;
      },
    },
    mutation: {
      ...crud.mutation,
      async logout(ctx: any) {
        setCookie(ctx.res, "token", "", { maxAge: 1 });
        return true;
      },
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
        setCookie(ctx.res, "token", resp.token, {
          maxAge: 60 * 60 * 12 * 1000, // 12 horas
        });
        return resp;
      },
    },
    connection,
    usuario,
  } as TUsuarioModel;

  return model;
}

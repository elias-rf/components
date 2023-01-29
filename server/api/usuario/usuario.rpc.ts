import type { TConnections, TCurrentUser } from "../../../types";
import { TUsuarioRpc } from "../../../types/usuario.type";
import { setInfo } from "../../../utils/set-info";
import { crudModel } from "../crud/crud.model";
import { usuarioModel } from "../usuario/usuario.model";

const table = "usuario";

export function usuarioRpc(connections: TConnections) {
  const usuario = usuarioModel(connections);
  const crud = crudModel(connections);
  const rsp: TUsuarioRpc = {
    query: {
      // ME
      async me(_, ctx): Promise<TCurrentUser> {
        return (
          ctx?.currentUser || {
            group_id: "",
            usuario_id: 0,
            nome: "",
            nome_login: "",
          }
        );
      },
      async schema() {
        return crud.schema({ table });
      },

      // LIST
      async list({ where, order, select, limit }) {
        return crud.list({ table, where, order, select, limit });
      },

      // READ
      async read({ id, select }) {
        return crud.read({ table, id, select });
      },

      // CLEAR
      async clear() {
        return crud.clear({ table });
      },
    },
    mutation: {
      // LOGIN
      // prettier-ignore
      async login({ user, password } ) {
        return usuario.login({ user, password });
      },

      // LOGOUT
      async logout(): Promise<boolean> {
        return true;
      },
      // DEL
      async del({ id }) {
        return crud.del({ table, id });
      },

      // CREATE
      async create({ data }) {
        return crud.create({ table, data });
      },

      // UPDATE
      async update({ id, data }) {
        return crud.update({ table, id, data });
      },
    },
  };

  setInfo(rsp, { query: { me: "RETORNA O USUÁRIO LOGADO" } });
  return rsp;
}

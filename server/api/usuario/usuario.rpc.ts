import type { CurrentUser } from "../../../types";
import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "../../../types";
import { TUsuario } from "../../../types/usuario.type";
import { TConnections } from "../../dal/connections";
import { UsuarioModel } from "../usuario/usuario.model";

export interface TUsuarioRpc {
  usuarioSchema(): Promise<Schema>;
  usuarioList(listArgs: ListArgs, ctx?: RpcContext): Promise<TUsuario[]>;
  usuarioRead(readArgs: ReadArgs, ctx?: RpcContext): Promise<TUsuario>;
  usuarioDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  usuarioCreate(creatArgs: CreateArgs, ctx?: RpcContext): Promise<TUsuario>;
  usuarioUpdate(updateArgs: UpdateArgs, ctx?: RpcContext): Promise<TUsuario>;
  login(args: { user: string; password: string }): Promise<CurrentUser>;
  logout(): Promise<boolean>;
  me(_: void, ctx?: RpcContext): Promise<CurrentUser>;
}

export function usuarioRpc(connections: TConnections): TUsuarioRpc {
  const usuarioModel = new UsuarioModel(connections);

  return {
    async usuarioSchema(): Promise<Schema> {
      return usuarioModel.schema();
    },
    // LIST
    async usuarioList(args = {}) {
      return usuarioModel.list(args);
    },

    // READ
    async usuarioRead(args) {
      return usuarioModel.read(args);
    },

    // DEL
    async usuarioDel(args) {
      return usuarioModel.del(args);
    },

    // CREATE
    async usuarioCreate(args) {
      return usuarioModel.create(args);
    },

    // UPDATE
    async usuarioUpdate(args) {
      return usuarioModel.update(args);
    },

    // LOGIN
    async login({ user, password }) {
      const usuario = new UsuarioModel(connections);
      return usuario.login({ user, password });
    },

    // LOGOUT
    async logout() {
      return true;
    },

    // ME
    async me(_: void, ctx) {
      return (
        ctx?.currentUser || {
          group_id: "",
          usuario_id: 0,
          nome: "",
          nome_login: "",
        }
      );
    },
  };
}

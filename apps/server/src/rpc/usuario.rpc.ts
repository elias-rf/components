import type { CurrentUser } from "@er/types";
import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "dal/connections";
import { TUsuario, UsuarioModel } from "../model";

export interface TUsuarioRpc {
  usuarioSchema(): Promise<Schema>;
  usuarioList(
    listArgs: ListArgs<TUsuario>,
    ctx?: RpcContext
  ): Promise<TUsuario[]>;
  usuarioRead(
    readArgs: ReadArgs<TUsuario>,
    ctx?: RpcContext
  ): Promise<TUsuario>;
  usuarioDel(delArgs: DelArgs<TUsuario>, ctx?: RpcContext): Promise<number>;
  usuarioCreate(
    creatArgs: CreateArgs<TUsuario>,
    ctx?: RpcContext
  ): Promise<TUsuario>;
  usuarioUpdate(
    updateArgs: UpdateArgs<TUsuario>,
    ctx?: RpcContext
  ): Promise<TUsuario>;
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
          grupo_id: "",
          usuario_id: "",
          nome: "",
          nome_login: "",
        }
      );
    },
  };
}

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
  usuarioList(listArgs: ListArgs, ctx?: RpcContext): Promise<TUsuario[]>;
  usuarioRead(readArgs: ReadArgs, ctx?: RpcContext): Promise<TUsuario>;
  usuarioDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  usuarioCreate(
    creatArgs: CreateArgs<TUsuario>,
    ctx?: RpcContext
  ): Promise<string[]>;
  usuarioUpdate(
    updateArgs: UpdateArgs<TUsuario>,
    ctx?: RpcContext
  ): Promise<any>;
}

export function usuarioRpc(connections: TConnections): TUsuarioRpc {
  const usuarioModel = new UsuarioModel(connections);

  return {
    async usuarioSchema(): Promise<Schema> {
      return usuarioModel.schema();
    },
    // LIST
    async usuarioList({ where, orderBy, limit, select } = {}) {
      return usuarioModel.list(where, orderBy, limit, select);
    },

    // READ
    async usuarioRead({ id, select }) {
      return usuarioModel.read(id, select);
    },

    // DEL
    async usuarioDel({ id }) {
      return usuarioModel.del(id);
    },

    // CREATE
    async usuarioCreate({ data }) {
      return usuarioModel.create(data);
    },

    // UPDATE
    async usuarioUpdate({ id, data }) {
      return usuarioModel.update(id, data);
    },
  };
}

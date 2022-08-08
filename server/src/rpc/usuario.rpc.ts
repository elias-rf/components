import { Connections } from "dal/connections";
import {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "../../../types";
import { UsuarioModel, UsuarioRecord } from "../model/oftalmo/usuario.model";

export interface UsuarioRpc {
  usuarioSchema(): Promise<Schema>;
  usuarioList(listArgs: ListArgs, ctx?: RpcContext): Promise<UsuarioRecord[]>;
  usuarioRead(readArgs: ReadArgs, ctx?: RpcContext): Promise<UsuarioRecord>;
  usuarioDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  usuarioCreate(
    creatArgs: CreateArgs<UsuarioRecord>,
    ctx?: RpcContext
  ): Promise<string[]>;
  usuarioUpdate(
    updateArgs: UpdateArgs<UsuarioRecord>,
    ctx?: RpcContext
  ): Promise<any>;
}

export function Usuario(connections: Connections): UsuarioRpc {
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

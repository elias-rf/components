import type {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import type { Connections } from "../dal/connections";
import {
  EtiquetaInternaModel,
  EtiquetaInternaRecord,
} from "../model/oftalmo/etiqueta-interna.model";

export interface EtiquetaInternaRpc {
  etiquetaInternaList(
    listArgs: ListArgs,
    ctx?: RpcContext
  ): Promise<EtiquetaInternaRecord[]>;
  etiquetaInternaRead(
    readArgs: ReadArgs,
    ctx?: RpcContext
  ): Promise<EtiquetaInternaRecord>;
  etiquetaInternaDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  etiquetaInternaCreate(
    createArgs: CreateArgs<EtiquetaInternaRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
  etiquetaInternaUpdate(
    updateArgs: UpdateArgs<EtiquetaInternaRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
}

export function EtiquetaInterna(connections: Connections): EtiquetaInternaRpc {
  const etiquetainternaModel = new EtiquetaInternaModel(connections);

  return {
    // LIST
    async etiquetaInternaList({ where, orderBy, limit, select }, ctx?) {
      return etiquetainternaModel.list(where, orderBy, limit, select);
    },

    // READ
    async etiquetaInternaRead({ id }) {
      return etiquetainternaModel.read(id);
    },

    // DEL
    async etiquetaInternaDel({ id }) {
      return etiquetainternaModel.del(id);
    },

    // CREATE
    async etiquetaInternaCreate({ data }) {
      return etiquetainternaModel.create(data);
    },

    // UPDATE
    async etiquetaInternaUpdate({ id, data }) {
      return etiquetainternaModel.update(id, data);
    },
  };
}

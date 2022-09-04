import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../../dal/connections";
import { EtiquetaExternaModel } from "../etiqueta-externa/etiqueta-externa.model";
import {
  TEtiquetaExterna,
  TEtiquetaExternaId,
} from "../etiqueta-externa/etiqueta-externa.type";

export interface TEtiquetaExternaRpc {
  etiquetaExternaList(
    listArgs: ListArgs<TEtiquetaExterna>,
    ctx?: RpcContext
  ): Promise<TEtiquetaExterna[]>;
  etiquetaExternaRead(
    readArgs: ReadArgs<TEtiquetaExternaId, TEtiquetaExterna>,
    ctx?: RpcContext
  ): Promise<TEtiquetaExterna>;
  etiquetaExternaDel(
    delArgs: DelArgs<TEtiquetaExternaId>,
    ctx?: RpcContext
  ): Promise<number>;
  etiquetaExternaCreate(
    createArgs: CreateArgs<TEtiquetaExterna>,
    ctx?: RpcContext
  ): Promise<TEtiquetaExterna>;
  etiquetaExternaUpdate(
    updateArgs: UpdateArgs<TEtiquetaExternaId, TEtiquetaExterna>,
    ctx?: RpcContext
  ): Promise<TEtiquetaExterna>;
}

export function etiquetaExternaRpc(
  connections: TConnections
): TEtiquetaExternaRpc {
  const etiquetaexternaModel = new EtiquetaExternaModel(connections);

  return {
    // LIST
    async etiquetaExternaList(listArgs) {
      return etiquetaexternaModel.list(listArgs);
    },

    // READ
    async etiquetaExternaRead(readArgs) {
      return etiquetaexternaModel.read(readArgs);
    },

    // DEL
    async etiquetaExternaDel(delArgs) {
      return etiquetaexternaModel.del(delArgs);
    },

    // CREATE
    async etiquetaExternaCreate(createArgs) {
      return etiquetaexternaModel.create(createArgs);
    },

    // UPDATE
    async etiquetaExternaUpdate(updateArgs) {
      return etiquetaexternaModel.update(updateArgs);
    },
  };
}

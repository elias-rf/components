import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../dal/connections";
import { EtiquetaInternaModel, TEtiquetaInterna } from "../model";

export interface TEtiquetaInternaRpc {
  etiquetaInternaList(
    listArgs: ListArgs<TEtiquetaInterna>,
    ctx?: RpcContext
  ): Promise<TEtiquetaInterna[]>;
  etiquetaInternaRead(
    readArgs: ReadArgs<TEtiquetaInterna>,
    ctx?: RpcContext
  ): Promise<TEtiquetaInterna>;
  etiquetaInternaDel(
    delArgs: DelArgs<TEtiquetaInterna>,
    ctx?: RpcContext
  ): Promise<number>;
  etiquetaInternaCreate(
    createArgs: CreateArgs<TEtiquetaInterna>,
    ctx?: RpcContext
  ): Promise<TEtiquetaInterna>;
  etiquetaInternaUpdate(
    updateArgs: UpdateArgs<TEtiquetaInterna>,
    ctx?: RpcContext
  ): Promise<TEtiquetaInterna>;
}

export function etiquetaInternaRpc(
  connections: TConnections
): TEtiquetaInternaRpc {
  const etiquetainternaModel = new EtiquetaInternaModel(connections);

  return {
    // LIST
    async etiquetaInternaList(listArgs) {
      return etiquetainternaModel.list(listArgs);
    },

    // READ
    async etiquetaInternaRead(readArgs) {
      return etiquetainternaModel.read(readArgs);
    },

    // DEL
    async etiquetaInternaDel(delArgs) {
      return etiquetainternaModel.del(delArgs);
    },

    // CREATE
    async etiquetaInternaCreate(createArgs) {
      return etiquetainternaModel.create(createArgs);
    },

    // UPDATE
    async etiquetaInternaUpdate(updateArgs) {
      return etiquetainternaModel.update(updateArgs);
    },
  };
}

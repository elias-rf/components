import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../../dal/connections";
import { EtiquetaInternaModel } from "./etiqueta-interna.model";
import { TEtiquetaInterna } from "./etiqueta-interna.type";

export interface TEtiquetaInternaRpc {
  etiquetaInternaList(
    listArgs: ListArgs,
    ctx?: RpcContext
  ): Promise<TEtiquetaInterna[]>;
  etiquetaInternaRead(
    readArgs: ReadArgs,
    ctx?: RpcContext
  ): Promise<TEtiquetaInterna>;
  etiquetaInternaDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  etiquetaInternaCreate(
    createArgs: CreateArgs,
    ctx?: RpcContext
  ): Promise<TEtiquetaInterna>;
  etiquetaInternaUpdate(
    updateArgs: UpdateArgs,
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

import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../../dal/connections";
import { EtiquetaExternaModel } from "./etiqueta-externa.model";
import { TEtiquetaExterna } from "./etiqueta-externa.type";

export interface TEtiquetaExternaRpc {
  etiquetaExternaList(
    listArgs: ListArgs,
    ctx?: RpcContext
  ): Promise<TEtiquetaExterna[]>;
  etiquetaExternaRead(
    readArgs: ReadArgs,
    ctx?: RpcContext
  ): Promise<TEtiquetaExterna>;
  etiquetaExternaDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  etiquetaExternaCreate(
    createArgs: CreateArgs,
    ctx?: RpcContext
  ): Promise<TEtiquetaExterna>;
  etiquetaExternaUpdate(
    updateArgs: UpdateArgs,
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

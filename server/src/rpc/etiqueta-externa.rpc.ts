import type {
  CreateArgs,
  DelArgs,
  Id,
  ListArgs,
  ReadArgs,
  RpcContext,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../dal/connections";
import { EtiquetaExternaModel, EtiquetaExternaRecord } from "../model";

export interface TEtiquetaExternaRpc {
  etiquetaExternaList(
    listArgs: ListArgs,
    ctx?: RpcContext
  ): Promise<EtiquetaExternaRecord[]>;
  etiquetaExternaRead(
    readArgs: ReadArgs,
    ctx?: RpcContext
  ): Promise<EtiquetaExternaRecord>;
  etiquetaExternaDel(delArgs: DelArgs, ctx?: RpcContext): Promise<number>;
  etiquetaExternaCreate(
    createArgs: CreateArgs<EtiquetaExternaRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
  etiquetaExternaUpdate(
    updateArgs: UpdateArgs<EtiquetaExternaRecord>,
    ctx?: RpcContext
  ): Promise<Id>;
}

export function etiquetaExternaRpc(
  connections: TConnections
): TEtiquetaExternaRpc {
  const etiquetaexternaModel = new EtiquetaExternaModel(connections);

  return {
    // LIST
    async etiquetaExternaList({ where, orderBy, limit, select }, ctx?) {
      return etiquetaexternaModel.list(where, orderBy, limit, select);
    },

    // READ
    async etiquetaExternaRead({ id }) {
      return etiquetaexternaModel.read(id);
    },

    // DEL
    async etiquetaExternaDel({ id }) {
      return etiquetaexternaModel.del(id);
    },

    // CREATE
    async etiquetaExternaCreate({ data }) {
      return etiquetaexternaModel.create(data);
    },

    // UPDATE
    async etiquetaExternaUpdate({ id, data }) {
      return etiquetaexternaModel.update(id, data);
    },
  };
}

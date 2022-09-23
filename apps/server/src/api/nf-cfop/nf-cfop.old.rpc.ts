import type {
  CreateArgs,
  DelArgs,
  ListArgs,
  ReadArgs,
  RpcContext,
  Schema,
  UpdateArgs,
} from "@er/types";
import type { TConnections } from "../../dal/connections";
import { NfCfopModel } from "./nf-cfop.model";
import { TNfCfop } from "./nf-cfop.type";

export interface TNfCfopRpc {
  nfCfopSchema: () => Promise<Schema>;
  nfCfopList: (listArgs: ListArgs, ctx?: RpcContext) => Promise<TNfCfop[]>;
  nfCfopRead: (readArgs: ReadArgs, ctx?: RpcContext) => Promise<TNfCfop>;
  nfCfopDel: (delArgs: DelArgs, ctx?: RpcContext) => Promise<number>;
  nfCfopCreate: (createArgs: CreateArgs, ctx?: RpcContext) => Promise<TNfCfop>;
  nfCfopUpdate: (
    { id, data }: UpdateArgs,
    ctx?: RpcContext
  ) => Promise<TNfCfop>;
}

export function nfCfopRpc(connections: TConnections): TNfCfopRpc {
  const nfCfop = new NfCfopModel(connections);

  return {
    async nfCfopSchema() {
      return nfCfop.schema();
    },
    // LIST
    async nfCfopList(args) {
      return nfCfop.list(args);
    },

    // READ
    async nfCfopRead(args) {
      return nfCfop.read(args);
    },

    // DEL
    async nfCfopDel(args): Promise<number> {
      return nfCfop.del(args);
    },

    // CREATE
    async nfCfopCreate(args) {
      return nfCfop.create(args);
    },

    // UPDATE
    async nfCfopUpdate(args) {
      return nfCfop.update(args);
    },
  };
}

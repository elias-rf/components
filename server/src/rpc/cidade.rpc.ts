import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../dal/connections";
import { CidadeModel, TCidade } from "../model";

export type TCidadeRpc = {
  cidadeSchema(): Promise<Schema>;
  cidadeList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TCidade[]>;
  cidadeRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TCidade>;
  cidadeDel(args: DelArgs, ctx?: { currentUser: CurrentUser }): Promise<number>;
  cidadeCreate(
    args: CreateArgs<TCidade>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TCidade>;
  cidadeUpdate(
    args: UpdateArgs<TCidade>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TCidade>;
};

export function cidadeRpc(connections: TConnections): TCidadeRpc {
  const cidade = new CidadeModel(connections);
  return {
    cidadeSchema() {
      return cidade.schema();
    },

    // LIST
    cidadeList({ where, orderBy, limit, select }) {
      return cidade.list(where, orderBy, limit, select);
    },

    // READ
    cidadeRead({ pk, select }) {
      return cidade.read(pk, select);
    },

    // DEL
    cidadeDel({ pk }) {
      return cidade.del(pk);
    },

    // CREATE
    cidadeCreate({ data }) {
      return cidade.create(data);
    },

    // UPDATE
    cidadeUpdate({ pk, data }) {
      return cidade.update(pk, data);
    },
  };
}

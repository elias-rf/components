import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "@er/types";
import { TConnections } from "../../dal/connections";
import { CidadeModel } from "./cidade.model";
import { TCidade } from "./cidade.type";

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
    args: CreateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TCidade>;
  cidadeUpdate(
    args: UpdateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TCidade>;
};

export function cidadeRpc(connections: TConnections): TCidadeRpc {
  const cidade = new CidadeModel(connections);
  return {
    async cidadeSchema() {
      return cidade.schema();
    },

    // LIST
    async cidadeList(args) {
      return cidade.list(args) as Promise<TCidade[]>;
    },

    // READ
    async cidadeRead(readArgs) {
      return cidade.read(readArgs) as Promise<TCidade>;
    },

    // DEL
    async cidadeDel(delArgs) {
      return cidade.del(delArgs);
    },

    // CREATE
    async cidadeCreate(createArgs) {
      return cidade.create(createArgs) as Promise<TCidade>;
    },

    // UPDATE
    async cidadeUpdate(updateArgs) {
      return cidade.update(updateArgs) as Promise<TCidade>;
    },
  };
}

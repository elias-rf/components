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
    args: ListArgs<TCidade>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TCidade[]>;
  cidadeRead(
    args: ReadArgs<TCidade>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TCidade>;
  cidadeDel(
    args: DelArgs<TCidade>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
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
    async cidadeSchema() {
      return cidade.schema();
    },

    // LIST
    async cidadeList(listArgs) {
      return cidade.list(listArgs);
    },

    // READ
    async cidadeRead(readArgs) {
      return cidade.read(readArgs);
    },

    // DEL
    async cidadeDel(delArgs) {
      return cidade.del(delArgs);
    },

    // CREATE
    async cidadeCreate(createArgs) {
      return cidade.create(createArgs);
    },

    // UPDATE
    async cidadeUpdate(updateArgs) {
      return cidade.update(updateArgs);
    },
  };
}

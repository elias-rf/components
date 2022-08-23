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
import { maquinaModel, TMaquina } from "../model";

export type TMaquinaRpc = {
  maquinaSchema(): Promise<Schema>;
  maquinaList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TMaquina[]>;
  maquinaRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TMaquina>;
  maquinaDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  maquinaCreate(
    args: CreateArgs<TMaquina>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TMaquina>;
  maquinaUpdate(
    args: UpdateArgs<TMaquina>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TMaquina>;
};

export function maquinaRpc(connections: TConnections): TMaquinaRpc {
  const maquina = maquinaModel(connections);
  return {
    maquinaSchema() {
      return maquina.schema();
    },

    // LIST
    maquinaList({ where, orderBy, limit, select }) {
      return maquina.list(where, orderBy, limit, select);
    },

    // READ
    maquinaRead({ pk, select }) {
      return maquina.read(pk, select);
    },

    // DEL
    maquinaDel({ pk }) {
      return maquina.del(pk);
    },

    // CREATE
    maquinaCreate({ data }) {
      return maquina.create(data);
    },

    // UPDATE
    maquinaUpdate({ pk, data }) {
      return maquina.update(pk, data);
    },
  };
}

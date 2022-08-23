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
import { diamanteModel, TDiamante } from "../model";

export type TDiamanteRpc = {
  diamanteSchema(): Promise<Schema>;
  diamanteList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TDiamante[]>;
  diamanteRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TDiamante>;
  diamanteDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  diamanteCreate(
    args: CreateArgs<TDiamante>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TDiamante>;
  diamanteUpdate(
    args: UpdateArgs<TDiamante>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TDiamante>;
};

export function diamanteRpc(connections: TConnections): TDiamanteRpc {
  const diamante = diamanteModel(connections);
  return {
    diamanteSchema() {
      return diamante.schema();
    },

    // LIST
    diamanteList({ where, orderBy, limit, select }) {
      return diamante.list(where, orderBy, limit, select);
    },

    // READ
    diamanteRead({ pk, select }) {
      return diamante.read(pk, select);
    },

    // DEL
    diamanteDel({ pk }) {
      return diamante.del(pk);
    },

    // CREATE
    diamanteCreate({ data }) {
      return diamante.create(data);
    },

    // UPDATE
    diamanteUpdate({ pk, data }) {
      return diamante.update(pk, data);
    },
  };
}

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
import { DiamanteModel } from "../model/diamante.model";
import { TDiamante } from "../type/diamante.type";

export type TDiamanteRpc = {
  diamanteSchema(): Promise<Schema>;
  diamanteList(
    args: ListArgs<TDiamante>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TDiamante[]>;
  diamanteRead(
    args: ReadArgs<TDiamante>,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TDiamante>;
  diamanteDel(
    args: DelArgs<TDiamante>,
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
  const diamante = new DiamanteModel(connections);
  return {
    diamanteSchema() {
      return diamante.schema();
    },

    // LIST
    diamanteList(args) {
      return diamante.list(args);
    },

    // READ
    diamanteRead(args) {
      return diamante.read(args);
    },

    // DEL
    diamanteDel(args) {
      return diamante.del(args);
    },

    // CREATE
    diamanteCreate(args) {
      return diamante.create(args);
    },

    // UPDATE
    diamanteUpdate(args) {
      return diamante.update(args);
    },
  };
}

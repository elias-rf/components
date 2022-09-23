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
import { DiamanteModel } from "./diamante.model";
import { TDiamante } from "./diamante.type";

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
    args: CreateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TDiamante>;
  diamanteUpdate(
    args: UpdateArgs,
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

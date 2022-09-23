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
import { VendedorModel } from "./vendedor.model";
import { TVendedor } from "./vendedor.type";

export type TVendedorRpc = {
  vendedorSchema(): Promise<Schema>;
  vendedorList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TVendedor[]>;
  vendedorRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TVendedor>;
  vendedorDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  vendedorCreate(
    args: CreateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TVendedor>;
  vendedorUpdate(
    args: UpdateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TVendedor>;
};

export function vendedorRpc(connections: TConnections): TVendedorRpc {
  const vendedor = new VendedorModel(connections);

  return {
    async vendedorSchema() {
      return vendedor.schema();
    },

    // LIST
    async vendedorList(args) {
      return vendedor.list(args);
    },

    // READ
    async vendedorRead(args) {
      return vendedor.read(args);
    },

    // DEL
    async vendedorDel(args) {
      return vendedor.del(args);
    },

    // CREATE
    async vendedorCreate(args) {
      return vendedor.create(args);
    },

    // UPDATE
    async vendedorUpdate(args) {
      return vendedor.update(args);
    },
  };
}

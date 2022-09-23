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
import { FornecedorModel } from "./fornecedor.model";
import { TFornecedor } from "./fornecedor.type";

export type TFornecedorRpc = {
  fornecedorSchema(): Promise<Schema>;
  fornecedorList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TFornecedor[]>;
  fornecedorRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TFornecedor>;
  fornecedorDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  fornecedorCreate(
    args: CreateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TFornecedor>;
  fornecedorUpdate(
    args: UpdateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TFornecedor>;
};

export function fornecedorRpc(connections: TConnections): TFornecedorRpc {
  const fornecedor = new FornecedorModel(connections);
  return {
    fornecedorSchema() {
      return fornecedor.schema();
    },

    // LIST
    fornecedorList(args) {
      return fornecedor.list(args);
    },

    // READ
    fornecedorRead(args) {
      return fornecedor.read(args);
    },

    // DEL
    fornecedorDel(args) {
      return fornecedor.del(args);
    },

    // CREATE
    fornecedorCreate(args) {
      return fornecedor.create(args);
    },

    // UPDATE
    fornecedorUpdate(args) {
      return fornecedor.update(args);
    },
  };
}

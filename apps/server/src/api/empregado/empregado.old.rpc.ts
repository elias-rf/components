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
import { EmpregadoModel } from "./empregado.model";
import { TEmpregado } from "./empregado.type";

export type TEmpregadoRpc = {
  empregadoSchema(): Promise<Schema>;
  empregadoList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TEmpregado[]>;
  empregadoRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TEmpregado>;
  empregadoDel(
    args: DelArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<number>;
  empregadoCreate(
    args: CreateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TEmpregado>;
  empregadoUpdate(
    args: UpdateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<TEmpregado>;
};

export function empregadoRpc(connections: TConnections): TEmpregadoRpc {
  const empregado = new EmpregadoModel(connections);
  return {
    empregadoSchema() {
      return empregado.schema();
    },

    // LIST
    empregadoList(args) {
      return empregado.list(args);
    },

    // READ
    empregadoRead(args) {
      return empregado.read(args);
    },

    // DEL
    empregadoDel(args) {
      return empregado.del(args);
    },

    // CREATE
    empregadoCreate(args) {
      return empregado.create(args);
    },

    // UPDATE
    empregadoUpdate(args) {
      return empregado.update(args);
    },
  };
}

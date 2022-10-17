import type {
  CreateArgs,
  CurrentUser,
  DelArgs,
  GenericObject,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "../../../types";
import { TConnections } from "../../dal/connections";
import { CrudModel } from "./crud.model";

export type TCrudRpc = {
  crudSchema(args: { table: string }): Promise<Schema>;
  crudClear(args: { table: string }): Promise<GenericObject>;
  crudList(
    args: ListArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<GenericObject[]>;
  crudRead(
    args: ReadArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<GenericObject>;
  crudDel(args: DelArgs, ctx?: { currentUser: CurrentUser }): Promise<number>;
  crudCreate(
    args: CreateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<GenericObject>;
  crudUpdate(
    args: UpdateArgs,
    ctx?: { currentUser: CurrentUser }
  ): Promise<GenericObject>;
};

export function crudRpc(connections: TConnections): TCrudRpc {
  const crud = new CrudModel(connections);
  return {
    async crudSchema(args) {
      return crud.schema(args);
    },

    // LIST
    async crudList(args) {
      return crud.list(args);
    },

    // READ
    async crudRead(args) {
      return crud.read(args);
    },

    // DEL
    async crudDel(args) {
      return crud.del(args);
    },

    // CREATE
    async crudCreate(args) {
      return crud.create(args);
    },

    // UPDATE
    async crudUpdate(args) {
      return crud.update(args);
    },

    // CLEAR
    async crudClear(args) {
      return crud.clear(args);
    },
  };
}

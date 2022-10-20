import type {
  CreateArgs,
  DelArgs,
  GenericObject,
  ListArgs,
  ReadArgs,
  Schema,
  UpdateArgs,
} from "../../../types";
import { TConnections } from "../../dal/connections";
import { crudModel } from "./crud.model";

export function crudRpc(connections: TConnections) {
  const crud = crudModel(connections);
  return {
    async crudSchema(args: { table: string }): Promise<Schema> {
      return crud.schema(args);
    },

    // LIST
    async crudList(args: ListArgs): Promise<GenericObject[]> {
      return crud.list(args);
    },

    // READ
    async crudRead(args: ReadArgs): Promise<GenericObject> {
      return crud.read(args);
    },

    // DEL
    async crudDel(args: DelArgs): Promise<number> {
      return crud.del(args);
    },

    // CREATE
    async crudCreate(args: CreateArgs): Promise<GenericObject> {
      return crud.create(args);
    },

    // UPDATE
    async crudUpdate(args: UpdateArgs): Promise<GenericObject> {
      return crud.update(args);
    },

    // CLEAR
    async crudClear(args: { table: string }): Promise<GenericObject> {
      return crud.clear(args);
    },
  };
}

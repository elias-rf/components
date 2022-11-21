import type {
  TCreateArgs,
  TDelArgs,
  TGenericObject,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "../../../types";
import { TConnections } from "../../dal/connections";
import { crudModel } from "./crud.model";

export type TCrudRpc = ReturnType<typeof crudRpc>;

export function crudRpc(connections: TConnections) {
  const crud = crudModel(connections);
  return {
    async crudSchema({ table }: { table: string }): Promise<TFieldServer[]> {
      return crud.schema({ table });
    },

    // LIST
    async crudList({
      table,
      where,
      order,
      select,
      limit,
    }: TListArgs): Promise<TGenericObject[]> {
      return crud.list({ table, where, order, select, limit });
    },

    // READ
    async crudRead({ table, id, select }: TReadArgs): Promise<TGenericObject> {
      return crud.read({ table, id, select });
    },

    // DEL
    async crudDel({ table, id }: TDelArgs): Promise<number> {
      return crud.del({ table, id });
    },

    // CREATE
    async crudCreate({ table, data }: TCreateArgs): Promise<TGenericObject> {
      return crud.create({ table, data });
    },

    // UPDATE
    async crudUpdate({
      table,
      id,
      data,
    }: TUpdateArgs): Promise<TGenericObject> {
      return crud.update({ table, id, data });
    },

    // CLEAR
    async crudClear({ table }: { table: string }): Promise<TGenericObject> {
      return crud.clear({ table });
    },
  };
}

import type {
  TConnections,
  TCreateArgs,
  TDelArgs,
  TFieldClient,
  TGenericObject,
  TListArgs,
  TReadArgs,
  TUpdateArgs,
} from "../../../types";
import { crudModel } from "./crud.model";

export type TCrudRpc = ReturnType<typeof crudRpc>;

export function crudRpc(connections: TConnections) {
  const crud = crudModel(connections);
  return {
    query: {
      async schema({ table }: { table: string }): Promise<TFieldClient[]> {
        return crud.schema({ table });
      },

      // LIST
      async list({
        table,
        where,
        order,
        select,
        limit,
      }: TListArgs): Promise<TGenericObject[]> {
        return crud.list({ table, where, order, select, limit });
      },

      // READ
      async read({ table, id, select }: TReadArgs): Promise<TGenericObject> {
        return crud.read({ table, id, select });
      },

      // CLEAR
      async clear({ table }: { table: string }): Promise<TGenericObject> {
        return crud.clear({ table });
      },
    },
    mutation: {
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
    },
    queries: {},
  };
}

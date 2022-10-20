import { Ids, Order, Schema, Select, Where } from "../../../types";
import { fetcherRpc } from "./fetcher-rpc";

type TCrudFactory<Rec> = {
  schema(): Promise<Schema>;
  clear(): Promise<Rec>;
  list(
    where?: Where[],
    orderBy?: Order[],
    limit?: number,
    select?: Select
  ): Promise<Rec[]>;
  read(id: Ids): Promise<Rec>;
  create(data: Rec): Promise<Rec>;
  update(id: Ids, data: Rec): Promise<Rec>;
  del(id: Ids): Promise<number>;
};

export function crudFactory<Rec>(table: string): TCrudFactory<Rec> {
  return {
    async schema() {
      return fetcherRpc<any>(`crudSchema`, { table }) as Promise<Schema>;
    },
    async clear() {
      return fetcherRpc<any>(`crudClear`, { table }) as Promise<Rec>;
    },

    async list(where?, orderBy?, limit = 500, select?) {
      return fetcherRpc<any>(`crudList`, {
        table,
        where,
        orderBy,
        limit,
        select,
      }) as Promise<Rec[]>;
    },

    async read(id) {
      return fetcherRpc<any>(`crudRead`, { table, id }) as Promise<Rec>;
    },

    async create(data) {
      return fetcherRpc<any>(`crudCreate`, { table, data }) as Promise<Rec>;
    },

    async update(id, data) {
      return fetcherRpc<any>(`crudUpdate`, { table, id, data }) as Promise<Rec>;
    },

    async del(id) {
      return fetcherRpc<any>(`crudDel`, { table, id }) as Promise<number>;
    },
  };
}

import { TField, TIds, TOrder, TSelect, TWhere } from "../../../types";
import { fetcherRpc } from "../../../utils/api/fetcher-rpc";

export type TCrudFactory<Rec> = {
  query: {
    schema(): Promise<TField[]>;
    clear(): Promise<Rec>;
    list(args: {
      where?: TWhere[];
      order?: TOrder[];
      limit?: number;
      select?: TSelect;
    }): Promise<Rec[]>;
    read(args: { id: TIds; select?: TSelect }): Promise<Rec>;
  };
  mutation: {
    create(args: { data: Rec }): Promise<Rec>;
    update(args: { id: TIds; data: Rec }): Promise<Rec>;
    del(args: { id: TIds }): Promise<number>;
  };
};

export function crudFactory<Rec>(table: string): TCrudFactory<Rec> {
  return {
    query: {
      async schema(): Promise<TField[]> {
        return fetcherRpc.query(`crudSchema`, { table }) as Promise<TField[]>;
      },
      async clear() {
        return fetcherRpc.query(`crudClear`, { table }) as Promise<Rec>;
      },

      async list(args) {
        return fetcherRpc.query(`crudList`, {
          table,
          ...args,
        }) as Promise<Rec[]>;
      },

      async read(args) {
        return fetcherRpc.query(`crudRead`, {
          table,
          ...args,
        }) as Promise<Rec>;
      },
    },
    mutation: {
      async create(args) {
        return fetcherRpc.mutation(`crudCreate`, {
          table,
          ...args,
        }) as Promise<Rec>;
      },

      async update(args) {
        return fetcherRpc.mutation(`crudUpdate`, {
          table,
          ...args,
        }) as Promise<Rec>;
      },

      async del(args) {
        return fetcherRpc.mutation(`crudDel`, {
          table,
          ...args,
        }) as Promise<number>;
      },
    },
  };
}

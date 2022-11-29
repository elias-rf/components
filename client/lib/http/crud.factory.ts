import { TFieldClient, TIds, TOrder, TSelect, TWhere } from "../../../types";
import { fetcherRpc } from "../../../utils/api/fetcher-rpc";

type TCrudFactory<Rec> = {
  schema(): Promise<TFieldClient[]>;
  clear(): Promise<Rec>;
  list(
    where?: TWhere[],
    order?: TOrder[],
    limit?: number,
    select?: TSelect
  ): Promise<Rec[]>;
  read(id: TIds): Promise<Rec>;
  create(data: Rec): Promise<Rec>;
  update(id: TIds, data: Rec): Promise<Rec>;
  del(id: TIds): Promise<number>;
};

export function crudFactory<Rec>(table: string): TCrudFactory<Rec> {
  return {
    async schema() {
      return fetcherRpc.query(`crudSchema`, { table }) as Promise<
        TFieldClient[]
      >;
    },
    async clear() {
      return fetcherRpc.query(`crudClear`, { table }) as Promise<Rec>;
    },

    async list(where?, order?, limit = 500, select?) {
      return fetcherRpc.query(`crudList`, {
        table,
        where,
        order,
        limit,
        select,
      }) as Promise<Rec[]>;
    },

    async read(id) {
      return fetcherRpc.query(`crudRead`, { table, id }) as Promise<Rec>;
    },

    async create(data) {
      return fetcherRpc.mutation(`crudCreate`, { table, data }) as Promise<Rec>;
    },

    async update(id, data) {
      return fetcherRpc.mutation(`crudUpdate`, {
        table,
        id,
        data,
      }) as Promise<Rec>;
    },

    async del(id) {
      return fetcherRpc.mutation(`crudDel`, { table, id }) as Promise<number>;
    },
  };
}

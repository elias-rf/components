import { TIds, TOrder, TSelect, TWhere } from "../../../types";
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
      return fetcherRpc(`crudSchema`, { table }) as Promise<TFieldClient[]>;
    },
    async clear() {
      return fetcherRpc(`crudClear`, { table }) as Promise<Rec>;
    },

    async list(where?, order?, limit = 500, select?) {
      return fetcherRpc(`crudList`, {
        table,
        where,
        order,
        limit,
        select,
      }) as Promise<Rec[]>;
    },

    async read(id) {
      return fetcherRpc(`crudRead`, { table, id }) as Promise<Rec>;
    },

    async create(data) {
      return fetcherRpc(`crudCreate`, { table, data }) as Promise<Rec>;
    },

    async update(id, data) {
      return fetcherRpc(`crudUpdate`, { table, id, data }) as Promise<Rec>;
    },

    async del(id) {
      return fetcherRpc(`crudDel`, { table, id }) as Promise<number>;
    },
  };
}

import { TIds, TOrder, TSelect, TWhere } from "../../../types";
import { fetcherRpc } from "../../../utils/api/fetcher-rpc";

type TRpcFactory<Rec> = {
  schema(): Promise<TFieldClient[]>;
  list(
    where?: TWhere[],
    orderBy?: TOrder[],
    limit?: number,
    select?: TSelect
  ): Promise<Rec[]>;
  read(id: TIds): Promise<Rec>;
  create(data: Rec): Promise<Rec>;
  update(id: TIds, data: Rec): Promise<Rec>;
  del(id: TIds): Promise<number>;
};

export function rpcFactory<Rec>(rpcRoot: string): TRpcFactory<Rec> {
  return {
    async schema() {
      return fetcherRpc(`${rpcRoot}Schema`) as Promise<TFieldClient[]>;
    },

    async list(where?, orderBy?, limit = 500, select?) {
      return fetcherRpc(`${rpcRoot}List`, {
        where,
        orderBy,
        limit,
        select,
      }) as Promise<Rec[]>;
    },

    async read(id) {
      return fetcherRpc(`${rpcRoot}Read`, { id }) as Promise<Rec>;
    },

    async create(data) {
      return fetcherRpc(`${rpcRoot}Create`, {
        data,
      }) as Promise<Rec>;
    },

    async update(id, data) {
      return fetcherRpc(`${rpcRoot}Update`, {
        id,
        data,
      }) as Promise<Rec>;
    },

    async del(id) {
      return fetcherRpc(`${rpcRoot}Del`, { id }) as Promise<number>;
    },
  };
}

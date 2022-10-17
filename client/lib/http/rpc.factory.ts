import { Ids, Order, Schema, Select, Where } from "../../../types";
import { fetcherRpc } from "./fetcher-rpc";

type TRpcFactory<Rec> = {
  schema(): Promise<Schema>;
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

export function rpcFactory<Rec>(rpcRoot: string): TRpcFactory<Rec> {
  return {
    async schema() {
      return fetcherRpc<any>(`${rpcRoot}Schema`) as Promise<Schema>;
    },

    async list(where?, orderBy?, limit = 500, select?) {
      return fetcherRpc<any>(`${rpcRoot}List`, {
        where,
        orderBy,
        limit,
        select,
      }) as Promise<Rec[]>;
    },

    async read(id) {
      return fetcherRpc<any>(`${rpcRoot}Read`, { id }) as Promise<Rec>;
    },

    async create(data) {
      return fetcherRpc<any>(`${rpcRoot}Create`, {
        data,
      }) as Promise<Rec>;
    },

    async update(id, data) {
      return fetcherRpc<any>(`${rpcRoot}Update`, {
        id,
        data,
      }) as Promise<Rec>;
    },

    async del(id) {
      return fetcherRpc<any>(`${rpcRoot}Del`, { id }) as Promise<number>;
    },
  };
}

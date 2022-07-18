import { Id, OrderBy, Schema, Where } from "@vt/types";
import { fetcherRpc } from "../../lib/http/fetcher-rpc";

export type Record = {
  [prop: string]: any;
};

export function rpcFactory(rpcRoot: string) {
  const service = {
    async schema(): Promise<Schema> {
      return fetcherRpc(`${rpcRoot}Schema`) as Promise<Schema>;
    },

    async list(
      where?: Where[],
      orderBy?: OrderBy[],
      limit = 500
    ): Promise<Record[]> {
      return fetcherRpc(`${rpcRoot}List`, { where, orderBy, limit }) as Promise<
        Record[]
      >;
    },

    async read(id: Id): Promise<Record> {
      return fetcherRpc(`${rpcRoot}Read`, { id }) as Promise<Record>;
    },

    async create(rec: Record) {
      return fetcherRpc(`${rpcRoot}Create`, { rec }) as Promise<Record>;
    },

    async update(id: Id, rec: Record) {
      return fetcherRpc(`${rpcRoot}Update`, { id, rec }) as Promise<Record>;
    },

    async del(id: string[]) {
      return fetcherRpc(`${rpcRoot}Del`, { id }) as Promise<number>;
    },
  };
  return service;
}

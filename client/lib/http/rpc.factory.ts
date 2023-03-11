import { fetcherRpc } from "../../../utils/api/fetcher-rpc";
import { cache } from "../../../utils/cache";

export type TRpcFactory = typeof rpcFactory;
export type TRpc = ReturnType<TRpcFactory>;

export function rpcFactory(table: string) {
  const serviceSchema = `${table}Schema`;
  const serviceClear = `${table}Clear`;
  const serviceList = `${table}List`;
  const serviceRead = `${table}Read`;
  const serviceCreate = `${table}Create`;
  const serviceUpdate = `${table}Update`;
  const serviceDel = `${table}Del`;
  const rsp = {
    query: {
      async schema() {
        return cache.fetch({
          key: serviceSchema,
          callback: fetcherRpc.query,
          args: [serviceSchema],
          expiresInSeconds: 3600,
        });
      },
      async clear() {
        return cache.fetch({
          key: serviceClear,
          callback: fetcherRpc.query,
          args: [serviceClear],
          expiresInSeconds: 3600,
        });
      },
      async list(args: any) {
        return cache.fetch({
          key: serviceList,
          callback: fetcherRpc.query,
          args: [serviceList, args],
          expiresInSeconds: 3600,
        });
      },
      async read(args: any) {
        return cache.fetch({
          key: serviceRead,
          callback: fetcherRpc.query,
          args: [serviceRead, args],
          expiresInSeconds: 60,
        });
      },
    },
    mutation: {
      async create(args: any) {
        cache.clear({ key: serviceList });
        return fetcherRpc.mutation(serviceCreate, args);
      },
      async update(args: any) {
        cache.clear({ key: serviceList });
        cache.clear({ key: serviceRead, args: [serviceRead, { id: args.id }] });
        return fetcherRpc.mutation(serviceUpdate, args);
      },
      async del(args: any) {
        cache.clear({ key: serviceList });
        cache.clear({ key: serviceRead, args: [serviceRead, { id: args.id }] });
        return fetcherRpc.mutation(serviceDel, args);
      },
    },
  };
  return rsp;
}

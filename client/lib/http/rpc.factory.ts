import { fetcherRpc } from "../../../utils/api/fetcher-rpc";
import { cache } from "../../../utils/cache";

export function rpcFactory<T>(table: string): T {
  const serviceSchema = `${table}Schema`;
  const serviceClear = `${table}Clear`;
  const serviceList = `${table}List`;
  const serviceRead = `${table}Read`;
  const serviceCreate = `${table}Create`;
  const serviceUpdate = `${table}Update`;
  const serviceDel = `${table}Del`;
  const rsp: T = {
    query: {
      schema() {
        return cache.fetch({
          key: serviceSchema,
          callback: fetcherRpc.query,
          args: [serviceSchema],
          expiresInSeconds: 3600,
        });
      },
      clear() {
        return cache.fetch({
          key: serviceClear,
          callback: fetcherRpc.query,
          args: [serviceClear],
          expiresInSeconds: 3600,
        });
      },
      list(args: any) {
        return cache.fetch({
          key: serviceList,
          callback: fetcherRpc.query,
          args: [serviceList, args],
          expiresInSeconds: 3600,
          debug: true,
        });
      },
      read(args: any) {
        return cache.fetch({
          key: serviceRead,
          callback: fetcherRpc.query,
          args: [serviceRead, args],
          expiresInSeconds: 60,
          debug: true,
        });
      },
    },
    mutation: {
      create(args: any) {
        cache.clear({ key: serviceList });
        return fetcherRpc.mutation(serviceCreate, args);
      },
      update(args: any) {
        cache.clear({ key: serviceList });
        cache.clear({ key: serviceRead, args: [{ id: args.id }] });
        return fetcherRpc.mutation(serviceUpdate, args);
      },
      del(args: any) {
        cache.clear({ key: serviceList });
        cache.clear({ key: serviceRead, args: [{ id: args.id }] });
        return fetcherRpc.mutation(serviceDel, args);
      },
    },
  };
  return rsp;
}

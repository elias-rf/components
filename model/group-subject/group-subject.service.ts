import deepmerge from "ts-deepmerge";
import { rpcFactory } from "../../client/lib/http/rpc.factory";
import { TGroupSubjectRpc } from "./group-subject.type";
//#region import
import { fetcherRpc } from "../../utils/api/fetcher-rpc";
import { cache } from "../../utils/cache";
//#endregion

export const groupSubjectService = deepmerge(rpcFactory("groupSubject"), {
  //#region service
  query: {
    async can(args) {
      return cache.fetch({
        key: `groupSubjectCan`,
        callback: fetcherRpc.query,
        args: [`groupSubjectCan`, args],
      });
    },
  },
  //#endregion
} as TGroupSubjectRpc);

//#region other
//#endregion

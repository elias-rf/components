import stringify from "json-stable-stringify";
import { KnexRequest } from "./knex-request";

export default function knexRequestMock(
  response: any,
  callback?: (r: any) => void
): KnexRequest {
  return async (db: string, query: any, noCache = false) => {
    let rsp: any;
    const operationName = stringify(query);

    if (callback) {
      rsp = { url: `/api/knex/${db}`, data: query, response, cache: noCache };
      callback(rsp);
    }
    return Promise.resolve(response);
  };
}

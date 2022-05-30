import knexCache from "./knex-cache";
import request from "../../utils/http/request";
import stringify from "json-stable-stringify";
import { KnexQuery } from "../../..";

const cache = knexCache();

export type KnexRequest = (
  db: string,
  query: any,
  noCache?: boolean
) => Promise<any>;

/**
 * Faz requisição ao banco de dados do servidor
 */
async function knexRequest<KnexRequest>(
  db: string,
  query: KnexQuery,
  noCache = true
) {
  let rsp: any;
  let cacheHit = "";
  let css = "color: #2f2;";
  const operationName = stringify(query);

  if (
    Object.hasOwn(query, "delete") ||
    Object.hasOwn(query, "update") ||
    Object.hasOwn(query, "insert")
  ) {
    cacheHit = `(cache ${query.from} cleared)`;
    cache.delOperation(query.from);
  }

  if (!noCache && cache.has(operationName)) {
    cacheHit += "cache hit";
    rsp = cache.get(operationName);
  } else {
    cacheHit += "cache miss";
    css = "color: #f00;";
    rsp = request.post({ url: `/api/knex/${db}`, data: query });
    cache.set(operationName, rsp);
  }
  rsp.then((r: any) => {
    if (import.meta.env.DEV) {
      console.groupCollapsed("Request: %c" + operationName, css);
      console.log(cacheHit);
      console.log(r);
      console.groupEnd();
    }
  });

  return rsp;
}

export default knexRequest;

import { Knex } from "knex";
import { hrtime } from "process";
import { logger } from "../../../utils/logger";

function toSql(sql: string, bindings: any[]) {
  return bindings.reduce((sql, binding, i) => {
    return sql.replace(new RegExp(`\\@p${i}`, "g"), () => {
      return JSON.stringify(binding);
    });
  }, sql);
}

export function knexLogger(knex: Knex) {
  const queries = new Map();

  function getQuery(queryId: string) {
    const query = queries.get(queryId);
    queries.delete(queryId);
    if (!query) throw new TypeError("Query disappeared");
    const { sql, bindings, startTime } = query;
    const duration = (hrtime.bigint() - startTime) / BigInt(1000000);
    return { query: toSql(sql, bindings), duration };
  }

  knex.on("query", ({ __knexQueryUid: queryId, sql, bindings }) => {
    const startTime = hrtime.bigint();
    queries.set(queryId, { sql, bindings, startTime });
  });

  knex.on("query-error", (_error, { __knexQueryUid: queryId }) => {
    logger(getQuery(queryId));
  });

  knex.on("query-response", (_response, { __knexQueryUid: queryId }) => {
    logger(getQuery(queryId));
  });

  return knex;
}

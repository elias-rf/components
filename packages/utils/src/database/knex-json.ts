import { Knex } from "knex";
import { isEmpty } from "../is/is-empty";

// métodos chamados como array de array de argumentos [[arg1, arg2, arg3, arg4]]
const arrayMethods = [
  "orWhere",
  "where",
  "whereNot",
  "whereNull",
  "whereIn",
  "whereNotIn",
  "whereBetween",
  "whereNotBetween",
  "whereLike",
  "whereRaw",
  "groupBy",
  "groupByRaw",
  "orderBy",
  "orderByRaw",
  "having",
  "join",
  "increment",
  "decrement",
  "select",
  "from",
  "sum",
];

export function knexJson(knex: Knex, sql: { [key: string]: any }) {
  let qry = knex.queryBuilder();
  for (const prop in sql) {
    if (isEmpty(sql[prop])) {
      continue;
    }
    if (arrayMethods.includes(prop)) {
      if (Array.isArray(sql[prop])) {
        sql[prop].forEach((condition: any) => {
          if (Array.isArray(condition)) {
            qry = qry[prop](...condition);
            // qry = qry[prop](
            //   condition[0],
            //   condition[1],
            //   condition[2],
            //   condition[3]
            // );
          } else {
            if (Object.hasOwn(condition, "raw")) {
              qry = qry[prop](knex.raw(condition.raw));
            } else {
              qry = qry[prop](condition);
            }
          }
        });
      } else {
        qry = qry[prop](sql[prop]);
      }
    } else {
      qry = qry[prop](sql[prop]);
    }
  }

  return qry;
}

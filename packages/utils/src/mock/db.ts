import _ from "lodash";

/**
 * Mockup database
 *
 * @param tables
 * @returns
 */
export function db(tables: { [key: string]: any[] }) {
  let rsp: { [key: string]: any[] } | any[] = Object.assign({}, tables);
  const dao = {
    select: (flds: string[]) => {
      if (!Array.isArray(rsp)) return dao;
      rsp = rsp.map((item) => {
        const r: { [key: string]: any } = {};
        flds.forEach((fld) => {
          r[fld] = item[fld];
        });
        return r;
      });
      return dao;
    },
    from: (table: string) => {
      rsp = tables[table];
      if (rsp === undefined) {
        throw new Error(`Table ${table} not found`);
        rsp = [];
      }
      return dao;
    },
    where: (where?: [string, string]) => {
      if (where === undefined || !Array.isArray(rsp)) return dao;
      rsp = rsp.filter((row: { [idx: string]: any }) => {
        if (row[where[0]] === where[1]) return true;
        return false;
      });
      return dao;
    },
    order: (order?: { [key: string]: any }) => {
      if (order === undefined) return dao;
      rsp = _.orderBy(rsp, Object.keys(order), Object.values(order));
      return dao;
    },

    get: () => rsp,
    reset: () => {
      rsp = Object.assign({}, tables);
      return dao;
    },
  };
  return dao;
}

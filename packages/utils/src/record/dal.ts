import _ from "lodash";

function dal(table: any[]) {
  let rsp = table;
  console.log("🚀 ~ file: dal.ts ~ line 5 ~ dal ~ rsp", rsp);
  const dao = {
    where: (where?: any) => {
      if (where === undefined) return dao;
      rsp = rsp.filter((row) => {
        if (row[where[0]] === where[1]) return true;
        // for (const key in where) {
        //   if (row[key] !== where[key]) return false;
        // }
        return false;
      });
      return dao;
    },
    order: (order?: any) => {
      if (order === undefined) return dao;
      rsp = _.orderBy(rsp, Object.keys(order), Object.values(order));
      return dao;
    },

    get: () => rsp,
  };
  return dao;
}

export default dal;

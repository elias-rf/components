import { GenericObject } from "../types";

export function db(data: GenericObject) {
  let dt = structuredClone(data);
  const methods = {
    del(where: (rec: any) => boolean) {
      dt = dt.filter((rec: GenericObject) => !where(rec));
      return methods;
    },
    list(where: (rec: any) => boolean) {
      dt = dt.filter((rec: GenericObject) => where(rec));
      return methods;
    },
    insert(rec: GenericObject) {
      dt.push(rec);
      return methods;
    },
    run() {
      return dt;
    },
  };
  return methods;
}

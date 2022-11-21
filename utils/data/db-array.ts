import { TGenericObject } from "../../types";

export function db(data: TGenericObject) {
  let dt = structuredClone(data);
  const methods = {
    del(where: (rec: any) => boolean) {
      dt = dt.filter((rec: TGenericObject) => !where(rec));
      return methods;
    },
    list(where: (rec: any) => boolean) {
      dt = dt.filter((rec: TGenericObject) => where(rec));
      return methods;
    },
    insert(rec: TGenericObject) {
      dt.push(rec);
      return methods;
    },
    run() {
      return dt;
    },
  };
  return methods;
}

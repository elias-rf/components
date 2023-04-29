import { TGenericObject } from "@mono/types";

export function setInfo(rpc: TGenericObject, info: TGenericObject) {
  for (const inf in info) {
    if (typeof info[inf] === "object") {
      setInfo(rpc[inf], info[inf]);
    } else {
      rpc[inf].info = info[inf];
    }
  }
  return rpc;
}

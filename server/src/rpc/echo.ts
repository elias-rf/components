import type { Connections } from "../dal/connections";

export interface EchoRpc {
  echo(arg1: any, arg2: any): Promise<any>;
}

export function Echo(_: Connections): EchoRpc {
  return {
    async echo(arg1: any, arg2: any) {
      return { arg1, arg2 };
    },
  };
}

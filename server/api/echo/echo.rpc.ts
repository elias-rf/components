import { TRpcContext } from "../../../types";

export type TEchoRpc = ReturnType<typeof echoRpc>;

export function echoRpc() {
  return {
    query: {
      async echo(arg1: any, context: TRpcContext) {
        return { arg1, ctx: Object.keys(context) };
      },
    },
    mutation: {
      async echo(arg1: any, context: TRpcContext) {
        return { arg1, ctx: Object.keys(context) };
      },
    },
  };
}

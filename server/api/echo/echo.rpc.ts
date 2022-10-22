export type TEchoRpc = ReturnType<typeof echoRpc>;

export function echoRpc() {
  return {
    async echo(arg1: any, arg2: any) {
      return { arg1, arg2 };
    },
  };
}

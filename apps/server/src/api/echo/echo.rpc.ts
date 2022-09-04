export interface TEchoRpc {
  echo(arg1: any, arg2: any): Promise<any>;
}

export function echoRpc(): TEchoRpc {
  return {
    async echo(arg1: any, arg2: any) {
      return { arg1, arg2 };
    },
  };
}

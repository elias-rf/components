import { createRequest } from "./create-request";
import { RpcRequestArgs } from "./types";

let currentId = 0;

const _createId = () => ++currentId;

export function rpcClient(args: RpcRequestArgs | RpcRequestArgs[]) {
  if (Array.isArray(args)) {
    return args.map((arg) => {
      const createId = arg.option?.createId || _createId;
      return createRequest(arg.method, arg.params, arg.id || createId());
    });
  }
  const createId = args.option?.createId || _createId;
  return createRequest(args.method, args.params, args.id || createId());
}

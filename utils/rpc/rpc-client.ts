import { getUniqueId } from "./get-unique-id";
import type { RpcRequest } from "./rpc-server";

export type RpcResponse = {
  jsonrpc: "2.0";
  id: number | string;
  result?: any;
  error?: {
    code: number | string;
    message: string;
    data?: any;
  };
};

export function rpcClient() {
  return {
    request(method: string, params: any): RpcRequest {
      return { jsonrpc: "2.0", id: getUniqueId(), method, params };
    },
    notify(method: string, params: any): RpcRequest {
      return { jsonrpc: "2.0", method, params };
    },
    response(resp: RpcResponse) {
      if (resp.result) return resp.result;
      throw new Error(resp.error?.message);
    },
  };
}

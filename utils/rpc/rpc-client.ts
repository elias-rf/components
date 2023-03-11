import type { RpcResponse, TRpcRequest } from "../../types";
import { getUniqueId } from "./get-unique-id";

/** codifica requests e decodifica responses no padrão RPC */
export function rpcClient() {
  return {
    request(method: string, params: any): TRpcRequest {
      const rsp: TRpcRequest = {
        jsonrpc: "2.0",
        id: getUniqueId(),
        method,
        params,
      };
      return rsp;
    },
    notify(method: string, params: any): TRpcRequest {
      return { jsonrpc: "2.0", method, params };
    },
    response(resp: RpcResponse) {
      if (resp.error) throw new Error(resp.error?.message);
      return resp.result;
    },
  };
}

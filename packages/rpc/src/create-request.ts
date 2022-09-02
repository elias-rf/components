import { RpcId, RpcRequest } from "./types";

export function createRequest(
  method: string,
  params?: any,
  id: RpcId = 1
): RpcRequest {
  return {
    jsonrpc: "2.0",
    id,
    method,
    params,
  };
}

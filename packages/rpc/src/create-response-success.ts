import { RpcId, RpcResponse } from "./types";

export function createResponse(id: RpcId, result: any): RpcResponse {
  return {
    jsonrpc: "2.0",
    id,
    result,
  };
}

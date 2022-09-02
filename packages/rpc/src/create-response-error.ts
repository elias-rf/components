import { RpcError, RpcId, RpcResponseError } from "./types";

export function createResponseError(
  id: RpcId,
  error: RpcError,
  data?: any
): RpcResponseError {
  return {
    jsonrpc: "2.0",
    id,
    error,
    data,
  };
}

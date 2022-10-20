import request from "supertest";

export function rpcRequest(method: any, params: any) {
  return JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method,
    params,
  });
}

export function rpcResponse(result: any) {
  return {
    jsonrpc: "2.0",
    id: 1,
    result,
  };
}

export function rpcResponseError(code: any, message: any) {
  return {
    jsonrpc: "2.0",
    id: 1,
    error: { code, message },
  };
}

export async function apiRequest(app: any, method: any, params: any) {
  return request(app)
    .post("/api/rpc")
    .set("Content-Type", "application/json")
    .send(rpcRequest(method, params));
}

import request from "supertest";

export function rpcRequest(method, params) {
  return JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method,
    params,
  });
}

export function rpcResponse(result) {
  return {
    jsonrpc: "2.0",
    id: 1,
    result,
  };
}

export function rpcResponseError(code, message) {
  return {
    jsonrpc: "2.0",
    id: 1,
    error: { code, message },
  };
}

export async function apiRequest(app, method, params) {
  return request(app.callback())
    .post("/api/rpc")
    .set("Content-Type", "application/json")
    .send(rpcRequest(method, params));
}

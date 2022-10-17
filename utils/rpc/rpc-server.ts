import { RpcResponse } from "./rpc-client";

const methods = new Map();

export type RpcRequest = {
  jsonrpc: "2.0";
  id?: number | string;
  method: string;
  params?: any;
};

function createError(code: any, message: string) {
  return { code, message };
}

export function rpcServer() {
  return {
    addMethod(method: string, body: (params: any) => any) {
      methods.set(method, body);
    },
    async receive(rpc: RpcRequest, context?: any) {
      let response: Partial<RpcResponse> = { jsonrpc: "2.0", id: rpc.id };
      if (rpc.jsonrpc !== "2.0") {
        response.error = createError(-32600, "invalid request");
      }
      if (methods.has(rpc.method)) {
        const body = methods.get(rpc.method);
        try {
          response.result = await body(rpc.params, context);
        } catch (error: any) {
          response.error = createError(
            error.cause || error.name,
            error.message
          );
        }
      } else {
        response.error = createError(-32601, "Method not found");
      }
      if (response.id) return response;
    },
    list() {
      return Array.from(methods.keys());
    },
  };
}

import { TRpcContext } from "../../types";
import { getParamsSintetic } from "../identify/get_params";
import { RpcResponse } from "./rpc-client";

const mutationMethods = new Map();
const queryMethods = new Map();

export type TRpcRequest = {
  jsonrpc: "2.0";
  id?: number | string;
  method: string;
  params?: any;
};

function createError(code: any, message: string) {
  return { code, message };
}

export function rpcServer() {
  const rsp = {
    /** Acrescenta um método para a lista RPC */
    addMethod(
      type: string,
      nameFunction: string,
      bodyFunction: (params: any) => any
    ) {
      if (type === "mutation" && bodyFunction) {
        mutationMethods.set(nameFunction, bodyFunction);
      }
      if (type === "query" && bodyFunction) {
        queryMethods.set(nameFunction, bodyFunction);
      }
    },
    /** Gerencia chamadas de métodos */
    async runMutation(rpc: TRpcRequest, context?: TRpcContext) {
      const response: Partial<RpcResponse> = { jsonrpc: "2.0", id: rpc.id };
      if (rpc.jsonrpc !== "2.0") {
        response.error = createError(-32600, "invalid request");
      }
      if (mutationMethods.has(rpc.method)) {
        const funct = mutationMethods.get(rpc.method);
        try {
          response.result = await funct(rpc.params, context);
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
    async runQuery(rpc: TRpcRequest, context?: TRpcContext) {
      const response: Partial<RpcResponse> = { jsonrpc: "2.0", id: rpc.id };
      if (rpc.jsonrpc !== "2.0") {
        response.error = createError(-32600, "invalid request");
        return response;
      }
      if (queryMethods.has(rpc.method)) {
        const funct = queryMethods.get(rpc.method);
        try {
          response.result = await funct(rpc.params, context, "teste");
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
    /** Lista com todos os métodos cadastrados */
    list(procedure?: string) {
      const resp: { query: string[]; mutation: string[] } = {
        query: [],
        mutation: [],
      };
      const qry: string[] = [];
      const mtt: string[] = [];
      queryMethods.forEach((funct, method) => {
        qry.push(
          `${method} (${getParamsSintetic(funct)
            .toString()
            .replaceAll("\n", "")
            .replaceAll(" ", "")})`
        );
      });
      mutationMethods.forEach((funct, method) => {
        mtt.push(
          `${method} (${getParamsSintetic(funct)
            .toString()
            .replaceAll("\n", "")
            .replaceAll(" ", "")})`
        );
      });
      if (procedure) {
        const fltProc = (item: string) => item.startsWith(procedure);
        resp.mutation = mtt.filter(fltProc).sort();
        resp.query = qry.filter(fltProc).sort();
      } else {
        resp.mutation = mtt.sort();
        resp.query = qry.sort();
      }
      return resp;
    },
  };
  return rsp;
}

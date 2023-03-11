import { RpcResponse, TRpcContext, TRpcRequest } from "../../types";
import { getParamsSintetic } from "../identify/get_params";

const mutationMethods = new Map();
const queryMethods = new Map();

function createError(code: any, message: string) {
  return { code, message };
}

function getHelp(funct: any, method: string) {
  return `${method}(${getParamsSintetic(funct)
    .toString()
    .replaceAll("\n", "")
    .replaceAll(" ", "")}) ${funct.info || ""} - ${funct.help}`;
}

export function rpcServer() {
  const rsp = {
    /** Acrescenta um método para a lista RPC */
    addMethod(type: string, nameFunction: any, bodyFunction: any) {
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
        response.error = createError(-32601, "Method not found: " + rpc.method);
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
        response.error = createError(-32601, "Method not found: " + rpc.method);
      }
      if (response.id) return response;
    },
    /** Ajuda com todos os métodos cadastrados */
    help(procedure?: string) {
      const resp: { query: string[]; mutation: string[] } = {
        query: [],
        mutation: [],
      };
      const qry: string[] = [];
      const mtt: string[] = [];
      queryMethods.forEach((funct, method) => {
        qry.push(getHelp(funct, method));
      });
      mutationMethods.forEach((funct, method) => {
        mtt.push(getHelp(funct, method));
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

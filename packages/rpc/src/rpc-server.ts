import { codeError } from "./code-error";
import { createResponseError } from "./create-response-error";
import { createResponse } from "./create-response-success";
import { RpcRequest, RpcRoute } from "./types";

async function run(routes: RpcRoute, args: RpcRequest, context: () => any) {
  if (!Object.hasOwn(routes, args.method)) {
    return createResponseError(args.id || 1, {
      code: codeError.METHOD_NOT_FOUND.code,
      message: codeError.METHOD_NOT_FOUND.message,
    });
  }
  try {
    return createResponse(
      args.id || 1,
      routes[args.method](args.params, context())
    );
  } catch (error) {
    return createResponseError(args.id || 1, {
      code: codeError.INTERNAL_ERROR.code,
      message: error.message,
    });
  }
}

export function rpcServer(routes: RpcRoute, context: () => any = () => null) {
  return async (args: RpcRequest | RpcRequest[]) => {
    if (Array.isArray(args)) {
      const response = [];
      for (const arg of args) {
        response.push(await run(routes, arg, context));
      }
      return response;
    }
    return await run(routes, args, context);
  };
}

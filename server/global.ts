import { TRpcContext } from "@mono/types/rpc";

//recognize it as module
export {};

declare global {
  namespace Express {
    export interface Request {
      context: TRpcContext;
    }
  }
}

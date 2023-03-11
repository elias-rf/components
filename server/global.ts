import { TRpcContext } from "../types";

//recognize it as module
export {};

declare global {
  namespace Express {
    export interface Request {
      context: TRpcContext;
    }
  }
}

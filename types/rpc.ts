import { TConnections, TCurrentUser } from "./index";

/** Contexto para RPC */
export type TRpcContext = {
  currentUser: TCurrentUser;
  token: string;
  connections: TConnections;
};

export type RpcResponse = {
  jsonrpc: "2.0";
  id: number | string;
  result?: any;
  error?: {
    code: number | string;
    message: string;
    data?: any;
  };
};

export type TRpcRequest = {
  jsonrpc: "2.0";
  id?: number | string;
  method: string;
  params?: any;
};

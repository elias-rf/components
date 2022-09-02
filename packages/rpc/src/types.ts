export type RpcId = number | string | null;

export type RpcParams = object | any[];

export type RpcRequestArgs = {
  id?: RpcId;
  method: string;
  params?: RpcParams;
  option?: RpcOption;
};

export type RpcRequest = {
  jsonrpc: "2.0";
  id?: RpcId;
  method: string;
  params?: RpcParams;
};

export type RpcResponse = RpcResponseSuccess | RpcResponseError;

export type RpcResponseSuccess = {
  jsonrpc: "2.0";
  id: RpcId;
  result: any;
};

export type RpcResponseError = {
  jsonrpc: "2.0";
  id: RpcId;
  error: RpcError;
  data: any;
};

export type RpcError = {
  code: number;
  message: string;
  data?: any;
};

export type RpcOption = {
  createId?: () => number | string;
};

export type RpcRoute = {
  [method: string]: (params?: RpcParams, context?: any) => any;
};

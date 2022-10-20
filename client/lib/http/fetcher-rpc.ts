import { ApiRpc } from "../../../server/api/rpc";
import { rpcClient } from "../../../utils/rpc/rpc-client";

const rpc = rpcClient();

export async function fetcherRpc<Method extends keyof ApiRpc>(
  method: Method,
  params?: any
): Promise<ReturnType<ApiRpc[Method]>> {
  const response = await fetch("/api/rpc", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(rpc.request(method, params)),
  });
  if (response.status === 200) {
    const body = await response.json();
    return rpc.response(body);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

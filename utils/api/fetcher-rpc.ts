import { rpcClient } from "../rpc/rpc-client";

const rpc = rpcClient();
/**
 * executa um RPC no servidor através de Fetch Http
 *
 * @export
 * @param {string} method Nome do método RPC
 * @param {*} [params] Parâmetros do método RPC
 * @return {*}
 */
export async function fetcherRpc(method: string, params?: any) {
  const response = await fetch("/api/rpc", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(rpc.request(method, params)),
  });
  if (response.status === 200) {
    const data = await response.json();
    const rsp = rpc.response(data);
    return rsp;
  }

  return Promise.reject(new Error(response.statusText));
}

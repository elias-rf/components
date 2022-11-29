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
async function query(method: string, params?: any) {
  const response = await fetch(
    "/api/rpc?rpc=" + JSON.stringify(rpc.request(method, params)),
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    const rsp = rpc.response(data);
    return rsp;
  }

  return Promise.reject(new Error(response.statusText));
}

async function mutation(method: string, params?: any) {
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

export const fetcherRpc = {
  query,
  mutation,
};

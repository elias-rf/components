import { rpcClient } from "../rpc/rpc-client";

let server = "";
if (process.env.NODE_ENV === "test") server = "http://localhost:3333";

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
  const rpcRequest = rpc.request(method, params);
  const url = `${server}/api/rpc?rpc=` + JSON.stringify(rpcRequest);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.status === 200) {
    const data = await response.json();
    const rsp = rpc.response(data);
    return rsp;
  }

  return Promise.reject(new Error(response.statusText));
}

async function mutation(method: string, params?: any) {
  const url = `${server}/api/rpc`;

  const response = await fetch(url, {
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

import { JSONRPCClient } from "json-rpc-2.0";
import { ApiRpc } from "../../../../server/src/rpc";

// JSONRPCClient needs to know how to send a JSON-RPC request.
// Tell it by passing a function to its constructor. The function must take a JSON-RPC request and send it.
const fetcher: JSONRPCClient = new JSONRPCClient(async (jsonRPCRequest) => {
  const response = await fetch("/api/rpc", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(jsonRPCRequest),
  });
  if (response.status === 200) {
    // Use client.receive when you received a JSON-RPC response.
    return response.json().then((jsonRPCResponse) => {
      return fetcher.receive(jsonRPCResponse);
    });
  } else if (jsonRPCRequest.id !== undefined) {
    return Promise.reject(new Error(response.statusText));
  }
});

export function fetcherRpc<Method extends keyof ApiRpc>(
  method: Method,
  ...params: Parameters<ApiRpc[Method]>
): ReturnType<ApiRpc[Method]> {
  return fetcher.request(method, params[0] as any) as any;
}

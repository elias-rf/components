const getUser = async (id: string) => {
  return { id, name: "Bilbo" };
};

type GetClient = (id: number) => { id: number; name: "Bilbo" };

type API = {
  getUser: (id: string) => { id: string; name: "Bilbo" };
  getClient: GetClient;
  // add additional routes here...
};

const query = <Endpoint extends keyof API>(
  endpoint: Endpoint,
  ...args: Parameters<API[Endpoint]>
): ReturnType<API[Endpoint]> => {
  return fetch("http://localhost:3000/api/rpc", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ endpoint, arguments: args }),
  }).then((response) => response.json()) as any;
};

const user = await query("getUser", "user_abc73bd39ef");
const cliente = await query("getClient", 2);

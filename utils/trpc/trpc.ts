import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { TAppRouter } from "../../model/app-router";

let server = "";
if (process.env.NODE_ENV === "development") server = "http://localhost:3333";

const links = [
  httpBatchLink({
    url: `${server}/api/trpc`,
    headers() {
      const token = `Bearer ${sessionStorage.getItem("token") || "NO_TOKEN"}`;
      return { Authorization: token };
    },
  }),
];

// trpc client avulso
export const fetchTrpc = createTRPCProxyClient<TAppRouter>({
  links,
});

// trpc com reactquery
export const trpc = createTRPCReact<TAppRouter>();

// trpc client para uso apenas com reactquery provider
export const trpcClient = trpc.createClient({
  links,
});

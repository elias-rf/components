import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { TRpcs } from "../../model/trpcs";

let server = "";
if (process.env.NODE_ENV === "test") server = "http://localhost:3333";

const links = [
  httpBatchLink({
    url: `${server}/api/trpc`,
  }),
];

// trpc client avulso
export const fetchTrpc = createTRPCProxyClient<TRpcs>({
  links,
});

// trpc com reactquery
export const trpc = createTRPCReact<TRpcs>();

// trpc client para uso apenas com reactquery provider
export const trpcClient = trpc.createClient({
  links,
});

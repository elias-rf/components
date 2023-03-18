import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import type { TRpcs } from "../../model/trpcs";

let server = "";
if (process.env.NODE_ENV === "test") server = "http://localhost:3333";

export const links = [
  httpBatchLink({
    url: `${server}/api/trpc`,
  }),
];

export const fetchTrpc = createTRPCProxyClient<TRpcs>({
  links,
});

export const trpc = createTRPCReact<TRpcs>();

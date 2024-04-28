import { HttpResponse, http } from "msw";
import { usuarioHandlers } from "./usuario.mjs";

const url = "http://localhost:3333/api/rpc2";

const notFoundHandler = http.post(url, async ({ request }) => {
  const body = await request.json();
  console.log(
    `%c🔴 ~ handlers ~ NOT FOUND:`,
    "background: #F00; color: #FFF",
    body
  );
  return new HttpResponse(null, { status: 404 });
});
let lastRpcId = "";
const loggerHandler = http.post(url, async ({ request }) => {
  const body = await request.clone().json();
  if (lastRpcId !== body.id) {
    lastRpcId = body.id;
    // console.log(`🚀 ~ handlers ~ RPC:`, body)
  }
});

export const handlers = [loggerHandler, ...usuarioHandlers, notFoundHandler];

import { http, HttpResponse } from "msw";
import { query } from "./util.mjs";
import { withRpcMethod } from "./with-rpc-method.mjs";

const url = "http://localhost:3333/api/rpc2";

let data = [
  {
    id: 1,
    nome: "fulano",
    usuario: "FULANO",
    setor: "0",
  },
  {
    id: 2,
    nome: "beltrano",
    usuario: "BELTRANO",
    setor: "42,20,0",
  },
  {
    id: 3,
    nome: "sicrano",
    usuario: "SICRANO",
    setor: "42,20",
  },
];

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
const user = {
  id: 1,
  usuario: "fulano",
  nome: "FULANO",
  grupoIds: "42,20,0",
  token,
};

export const usuarioHandlers = [
  http.post(
    url,
    withRpcMethod({ method: "usuario_list" }, async ({ request }) => {
      const body = await request.json();
      const result = query(data, body.params);
      const response = {
        id: body.id,
        result,
      };
      return HttpResponse.json(response);
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: "usuario_read" }, async ({ request }) => {
      const body = await request.json();
      const result = query(data, body.params)[0] || {};

      const response = {
        id: body.id,
        result,
      };
      return HttpResponse.json(response);
    })
  ),

  http.post(
    url,
    withRpcMethod({ method: "usuario_me" }, async ({ request }) => {
      const body = await request.json();
      const response = { id: body.id, result: user };
      return HttpResponse.json(response);
    })
  ),

  http.post(
    url,
    withRpcMethod(
      { method: "usuario_login", params: { user: "sicrano" } },
      async ({ request }) => {
        const body = await request.json();
        const response = { id: body.id, result: user };
        response.result.grupoIds = "42,20";
        response.result.usuario = "sicrano";
        return HttpResponse.json(response);
      }
    )
  ),

  http.post(
    url,
    withRpcMethod({ method: "usuario_login" }, async ({ request }) => {
      const body = await request.json();
      const response = { id: body.id, result: user };
      return HttpResponse.json(response);
    })
  ),
];

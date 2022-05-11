import type { Where, OrderBy } from "types";
import request from "../../utils/http/request";
import type { KnexRequest } from "../../lib/knex/knex-request";
import isEmpty from "../../utils/is/is-empty";

export default function AuthService(client: KnexRequest) {
  const service = {
    async schema() {
      const response = {
        schemaAuth: {
          pk: ["idSubject", "idGroup"],
          fields: [
            {
              field: "idSubject",
              label: "Permissão",
              type: "ID",
            },
            {
              field: "idGroup",
              label: "Grupo",
              type: "ID",
            },
          ],
        },
      };
      return response.schemaAuth;
    },

    async list(where?: Where[], orderBy?: OrderBy[], noCache = false) {
      const response = await client(
        "oftalmo",
        {
          from: "groupSubject",
          limit: 1000,
          where,
          orderBy,
        },
        noCache
      );
      return response;
    },

    async read(pk: string[]) {
      if (pk.length !== 2)
        throw new Error("Exclusão de autorização precisa de chave composta");
      const response = await client("oftalmo", {
        from: "groupSubject",
        where: [
          ["idSubject", "=", pk[0]],
          ["idGroup", "=", pk[1]],
        ],
      });
      return response[0];
    },

    async create(input: { idSubject: string; idGroup: string }) {
      const response = await client("oftalmo", {
        from: "groupSubject",
        insert: input,
      });
      return response;
    },

    async del(pk: string[]) {
      if (pk.length !== 2)
        throw new Error("Exclusão de autorização precisa de chave composta");
      const response = await client("oftalmo", {
        from: "groupSubject",
        where: [
          ["idSubject", "=", pk[0]],
          ["idGroup", "=", pk[1]],
        ],
        del: ["idSubject", "idGroup"],
      });
      return response;
    },

    async login(user: string, password: string) {
      return await request.post({
        url: "/api/login",
        data: { user, password },
      });
    },

    async logout() {
      return await request.post({ url: "/api/logout", data: {} });
    },

    async can(idSubject: string, idGroup: string) {
      let response = await service.read([idSubject, idGroup]);
      let rsp = !isEmpty(response);

      // Cadastra novas permissões para o grupo dev
      if (!rsp && idGroup === "dev") {
        response = await service.create({ idSubject, idGroup });
        rsp = response.length > 0;
      }
      return rsp;
    },

    async me() {
      return await request.get({ url: "/api/me" });
    },

    clear() {
      return {
        idSubject: "",
        idGroup: "",
      };
    },
  };
  return service;
}

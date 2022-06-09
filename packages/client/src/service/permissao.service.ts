import type { OrderBy, Where } from "../..";
import { Id } from "../../../..";
import fetcherRpc from "../lib/http/fetcher-rpc";
import request from "../utils/http/request";
import isEmpty from "../utils/is/is-empty";

type PermissaoRecord = { idSubject: string; idGroup: string };

export default function PermissaoService() {
  const service = {
    async schema() {
      return {
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
      };
    },

    async list(
      where?: Where[],
      orderBy?: OrderBy[]
    ): Promise<PermissaoRecord[]> {
      return fetcherRpc.request("permissaoList", { where, orderBy });
    },

    async read(id: Id): Promise<PermissaoRecord> {
      return fetcherRpc.request("permissaoRead", { id });
    },

    async create(rec: PermissaoRecord) {
      return fetcherRpc.request("permissaoCreate", { rec });
    },

    async update(id: Id, rec: PermissaoRecord) {
      return fetcherRpc.request("permissaoUpdate", { id, rec });
    },

    async del(id: Id) {
      return fetcherRpc.request("permissaoDel", { id });
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

    async me() {
      return await request.get({ url: "/api/me" });
    },

    async can(idSubject: string, idGroup: string) {
      let response = await fetcherRpc.request("permissaoRead", {
        id: [idSubject, idGroup],
      });
      let rsp = !isEmpty(response);

      // Cadastra novas permissões para o grupo dev
      if (!rsp && idGroup === "dev") {
        response = await service.create({ idSubject, idGroup });
        rsp = response.length > 0;
      }
      return rsp;
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

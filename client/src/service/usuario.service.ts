import pick from "@/utils/object/pick";
import { Where, OrderBy, Schema } from "..";
import type { KnexRequest } from "../lib/knex/knex-request";
import fetcherRpc from "../lib/http/fetcher-rpc";

export type UsuarioRecord = {
  kUsuario: string;
  NomeUsuario: string;
  nome: string;
  idGroup: string;
  Ativo: number;
};

export default function UsuarioService(client: KnexRequest) {
  const service = {
    schema(): Schema {
      return {
        pk: ["kUsuario"],
        fields: [
          {
            field: "kUsuario",
            label: "Código do usuário",
            type: "ID",
          },
          {
            field: "NomeUsuario",
            label: "Login",
            type: "string",
          },
          {
            field: "idGroup",
            label: "Grupo de segurança",
            type: "string",
          },
          {
            field: "Ativo",
            label: "Cadastro ativo",
            type: "boolean",
          },
          {
            field: "nome",
            label: "Nome",
            type: "string",
          },
        ],
      };
    },

    async list(where?: Where[], orderBy?: OrderBy[]): Promise<UsuarioRecord[]> {
      return fetcherRpc.request("listUsuario", { where, orderBy });
    },

    async read(id: string[]): Promise<UsuarioRecord> {
      if (!Array.isArray(id)) {
        id = [id];
      }
      const pk = id[0]?.toString() || "";
      return fetcherRpc.request("readUsuario", { id: pk });
    },

    async create(input: UsuarioRecord) {
      return fetcherRpc.request("createUsuario", { rec: input });
    },

    async update(id: string[], input: UsuarioRecord) {
      if (!Array.isArray(id)) {
        id = [id];
      }
      const pk = id[0]?.toString() || "";
      const rec = pick(input, ["NomeUsuario", "nome", "idGroup", "Ativo"]);
      return fetcherRpc.request("updateUsuario", { id: pk, rec: rec });
    },

    async del(id: string[]) {
      if (!Array.isArray(id)) {
        id = [id];
      }
      const pk = id[0]?.toString() || "";
      return fetcherRpc.request("delUsuario", { id: pk });
    },

    clear: (): UsuarioRecord => {
      return {
        kUsuario: "",
        NomeUsuario: "",
        idGroup: "",
        nome: "",
        Ativo: 1,
      };
    },
  };
  return service;
}

import pick from "@/utils/object/pick";
import { OrderBy, Schema, Where } from "../..";
import fetcherRpc from "../lib/http/fetcher-rpc";
import type { KnexRequest } from "../lib/knex/knex-request";

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
      return fetcherRpc.request("usuarioList", { where, orderBy });
    },

    async read(id: string[]): Promise<UsuarioRecord> {
      if (!Array.isArray(id)) {
        id = [id];
      }
      const pk = id[0]?.toString() || "";
      return fetcherRpc.request("usuarioRead", { id: pk });
    },

    async create(input: UsuarioRecord) {
      return fetcherRpc.request("usuarioCreate", { rec: input });
    },

    async update(id: string[], input: UsuarioRecord) {
      if (!Array.isArray(id)) {
        id = [id];
      }
      const pk = id[0]?.toString() || "";
      const rec = pick(input, ["NomeUsuario", "nome", "idGroup", "Ativo"]);
      return fetcherRpc.request("usuarioUpdate", { id: pk, rec: rec });
    },

    async del(id: string[]) {
      if (!Array.isArray(id)) {
        id = [id];
      }
      const pk = id[0]?.toString() || "";
      return fetcherRpc.request("usuarioDel", { id: pk });
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

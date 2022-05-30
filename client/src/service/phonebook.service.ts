import { Where, OrderBy, Schema } from "../../index.d";
import fetcherRpc from "../lib/http/fetcher-rpc";

export type PhonebookRecord = {
  id: string;
  name: string;
  department: string;
  email: string;
};

export default function PhonebookService() {
  return {
    schema(): Schema {
      return {
        pk: ["id"],
        fields: [
          {
            field: "id",
            label: "Ramal",
            type: "ID",
          },
          {
            field: "name",
            label: "Nome",
            type: "string",
          },
          {
            field: "department",
            label: "Setor",
            type: "string",
          },
          {
            field: "email",
            label: "Email",
            type: "string",
          },
        ],
      };
    },

    async list(
      where?: Where[],
      orderBy?: OrderBy[]
    ): Promise<PhonebookRecord[]> {
      return fetcherRpc.request("listPhonebook", { where, orderBy });
    },

    async read(id: string[]): Promise<PhonebookRecord> {
      if (!Array.isArray(id)) {
        id = [id];
      }
      return fetcherRpc.request("readPhonebook", { id });
    },

    async create(input: PhonebookRecord) {
      return fetcherRpc.request("createPhonebook", { rec: input });
    },

    async update(id: string[], input: PhonebookRecord) {
      if (!Array.isArray(id)) {
        id = [id];
      }
      const pk = id[0]?.toString() || "";
      return fetcherRpc.request("updatePhonebook", { id: pk, rec: input });
    },

    async del(id: string[]) {
      if (!Array.isArray(id)) {
        id = [id];
      }
      const pk = id[0]?.toString() || "";
      return fetcherRpc.request("delPhonebook", { id: pk });
    },

    clear() {
      return {
        id: "",
        name: "",
        department: "",
        email: "",
      };
    },
  };
}

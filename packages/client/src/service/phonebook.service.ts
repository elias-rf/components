import { OrderBy, Schema, Where } from "../..";
import { Id } from "../../../..";
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
      return fetcherRpc.request("phonebookList", { where, orderBy });
    },

    async read(id: Id): Promise<PhonebookRecord> {
      return fetcherRpc.request("phonebookRead", { id });
    },

    async create(rec: PhonebookRecord) {
      return fetcherRpc.request("phonebookCreate", { rec });
    },

    async update(id: Id, rec: PhonebookRecord) {
      return fetcherRpc.request("phonebookUpdate", { id, rec });
    },

    async del(id: Id) {
      return fetcherRpc.request("phonebookDel", { id });
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

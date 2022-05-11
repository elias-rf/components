import { Where, OrderBy, Schema } from "types";
import { KnexRequest } from "../../lib/knex/knex-request";

interface PhonebookInput {
  id?: string;
  name: string;
  department: string;
  email: string;
  __typename?: string;
}

export default function PhonebookService(client: KnexRequest) {
  return {
    async schema(): Promise<Schema> {
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

    async list(where?: Where[], orderBy?: OrderBy[]) {
      const response = await client("oftalmo", {
        from: "phonebook",
        where,
        orderBy,
      });
      return response;
    },

    async read([id]: string[]) {
      const response = await client("oftalmo", {
        from: "phonebook",
        where: [["id", "=", id]],
      });
      return response[0];
    },

    async create(input: PhonebookInput) {
      const response = await client("oftalmo", {
        from: "phonebook",
        insert: input,
      });
      return response;
    },

    async update([id]: string[], input: PhonebookInput) {
      const response = await client("oftalmo", {
        from: "phonebook",
        where: [["id", "=", id]],
        update: input,
      });
      return response;
    },

    async del([id]: string[]) {
      const response = await client("oftalmo", {
        from: "phonebook",
        where: [["id", "=", id]],
        del: ["id"],
      });
      return response;
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

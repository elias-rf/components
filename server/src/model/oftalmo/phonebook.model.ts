import { Schema } from "@er/types";
import { Connections } from "../../dal/connections";
import { Model } from "../model";

export type PhonebookRecord = {
  id?: string;
  name?: string;
  department?: string;
  email?: string;
};

export class PhonebookModel extends Model<PhonebookRecord> {
  constructor(connections: Connections) {
    super(connections.oftalmo, "phonebook", "phonebook", ["id"]);
  }

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
  }
}

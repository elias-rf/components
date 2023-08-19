import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Phonebook extends ModelBase {
  static tableName = "phonebook";
  static idColumn = ["id"];

  id!: number;
  name!: string;
  department!: string;
  email!: string;
  

  static getFields() {
    return [
      "id",
      "name",
      "department",
      "email",
      ];
  }
}

Phonebook.knex(connections.oftalmo);

export type TPhonebook = ModelObject<Phonebook>;

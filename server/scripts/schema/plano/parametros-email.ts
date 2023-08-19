import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ParametrosEmail extends ModelBase {
  static tableName = "ParametrosEmail";
  static idColumn = ["Tipo"];

  Tipo!: string;
  Remetente!: string;
  IdRemetente!: string;
  SMTPHost!: string;
  SMTPPort!: string;
  Connect!: string;
  Message!: string;
  Autentication!: string;
  TLS!: string;
  UserName!: string;
  Password!: string;
  

  static getFields() {
    return [
      "Tipo",
      "Remetente",
      "IdRemetente",
      "SMTPHost",
      "SMTPPort",
      "Connect",
      "Message",
      "Autentication",
      "TLS",
      "UserName",
      "Password",
      ];
  }
}

ParametrosEmail.knex(connections.plano);

export type TParametrosEmail = ModelObject<ParametrosEmail>;

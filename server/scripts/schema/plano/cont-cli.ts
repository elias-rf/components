import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ContCli extends ModelBase {
  static tableName = "ContCli";
  static idColumn = [];

  CdCliente!: number;
  NumSequencia!: number;
  NmContato!: string;
  Telefone!: string;
  Ramal!: number;
  DtNascimento!: Date;
  Hobby!: string;
  DtUltAlteracao!: Date;
  Setor!: string;
  Email!: string;
  FgNotificacao!: string;
  FgSuporte!: string;
  

  static getFields() {
    return [
      "CdCliente",
      "NumSequencia",
      "NmContato",
      "Telefone",
      "Ramal",
      "DtNascimento",
      "Hobby",
      "DtUltAlteracao",
      "Setor",
      "Email",
      "FgNotificacao",
      "FgSuporte",
      ];
  }
}

ContCli.knex(connections.plano);

export type TContCli = ModelObject<ContCli>;

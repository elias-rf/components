import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class AnexosRat extends ModelBase {
  static tableName = "AnexosRat";
  static idColumn = ["CdAnexosRat"];

  CdAnexosRat!: number;
  NumeroRat!: number;
  NomeAnexo!: string;
  Anexo!: any;
  Sequencia!: number;
  

  static getFields() {
    return [
      "CdAnexosRat",
      "NumeroRat",
      "NomeAnexo",
      "Anexo",
      "Sequencia",
      ];
  }
}

AnexosRat.knex(connections.plano);

export type TAnexosRat = ModelObject<AnexosRat>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class EPharmaConvenios extends ModelBase {
  static tableName = "ePharmaConvenios";
  static idColumn = ["CdConvenio"];

  CdConvenio!: number;
  Nmconvenio!: string;
  Rec!: number;
  TipoConvenio!: number;
  TipoPreco!: number;
  FgMenorPreco!: string;
  FgAutorizacao!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdConvenio",
      "Nmconvenio",
      "Rec",
      "TipoConvenio",
      "TipoPreco",
      "FgMenorPreco",
      "FgAutorizacao",
      "FgAtivo",
      ];
  }
}

EPharmaConvenios.knex(connections.plano);

export type TEPharmaConvenios = ModelObject<EPharmaConvenios>;

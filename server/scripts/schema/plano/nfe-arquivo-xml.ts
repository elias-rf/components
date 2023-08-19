import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NfeArquivoXml extends ModelBase {
  static tableName = "NfeArquivoXML";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Tipo!: string;
  Sequencia!: number;
  TextoXML!: string;
  DtGeracao!: Date;
  Usuario!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Tipo",
      "Sequencia",
      "TextoXML",
      "DtGeracao",
      "Usuario",
      ];
  }
}

NfeArquivoXml.knex(connections.plano);

export type TNfeArquivoXml = ModelObject<NfeArquivoXml>;

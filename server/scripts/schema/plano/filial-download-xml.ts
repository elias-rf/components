import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class FilialDownloadXml extends ModelBase {
  static tableName = "FilialDownloadXML";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  CNPJCPFAutorizado!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "CNPJCPFAutorizado",
      ];
  }
}

FilialDownloadXml.knex(connections.plano);

export type TFilialDownloadXml = ModelObject<FilialDownloadXml>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Projetos extends ModelBase {
  static tableName = "Projetos";
  static idColumn = ["CdProjeto"];

  CdProjeto!: number;
  NmProjeto!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdProjeto",
      "NmProjeto",
      "FgAtivo",
      ];
  }
}

Projetos.knex(connections.plano);

export type TProjetos = ModelObject<Projetos>;

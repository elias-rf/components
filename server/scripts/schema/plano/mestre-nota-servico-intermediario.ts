import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class MestreNotaServicoIntermediario extends ModelBase {
  static tableName = "MestreNotaServicoIntermediario";
  static idColumn = [];

  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  RazaoSocialIntermediario!: string;
  CPFCNPJIntermediario!: number;
  InscMunicipalIntermediario!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "RazaoSocialIntermediario",
      "CPFCNPJIntermediario",
      "InscMunicipalIntermediario",
      ];
  }
}

MestreNotaServicoIntermediario.knex(connections.plano);

export type TMestreNotaServicoIntermediario = ModelObject<MestreNotaServicoIntermediario>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProgramaAmiVida extends ModelBase {
  static tableName = "ProgramaAmiVida";
  static idColumn = [];

  CdFilial!: number;
  CdProduto!: string;
  Campanha!: string;
  UnidadesCaixa!: number;
  DtInicioCampanha!: Date;
  DtFinalCampanha!: Date;
  FgParticipacao!: string;
  DtUltAlteracao!: Date;
  

  static getFields() {
    return [
      "CdFilial",
      "CdProduto",
      "Campanha",
      "UnidadesCaixa",
      "DtInicioCampanha",
      "DtFinalCampanha",
      "FgParticipacao",
      "DtUltAlteracao",
      ];
  }
}

ProgramaAmiVida.knex(connections.plano);

export type TProgramaAmiVida = ModelObject<ProgramaAmiVida>;

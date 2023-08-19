import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class NotaItemDesoneracao extends ModelBase {
  static tableName = "NotaItemDesoneracao";
  static idColumn = [];

  CdEmpresa!: number;
  CdFilial!: number;
  NumNota!: number;
  Serie!: string;
  Modelo!: string;
  Sequencia!: number;
  CdBeneficioFiscal!: string;
  AliquotaDesoneracao!: number;
  VlDesoneracao!: number;
  CdMotivoDesoneracao!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdFilial",
      "NumNota",
      "Serie",
      "Modelo",
      "Sequencia",
      "CdBeneficioFiscal",
      "AliquotaDesoneracao",
      "VlDesoneracao",
      "CdMotivoDesoneracao",
      ];
  }
}

NotaItemDesoneracao.knex(connections.plano);

export type TNotaItemDesoneracao = ModelObject<NotaItemDesoneracao>;

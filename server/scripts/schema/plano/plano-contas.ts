import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class PlanoContas extends ModelBase {
  static tableName = "PlanoContas";
  static idColumn = ["NumConta"];

  NumConta!: number;
  Descricao!: string;
  CdReduzido!: number;
  TipoConta!: string;
  CdCorrelacionado!: number;
  CdNatureza!: number;
  

  static getFields() {
    return [
      "NumConta",
      "Descricao",
      "CdReduzido",
      "TipoConta",
      "CdCorrelacionado",
      "CdNatureza",
      ];
  }
}

PlanoContas.knex(connections.plano);

export type TPlanoContas = ModelObject<PlanoContas>;

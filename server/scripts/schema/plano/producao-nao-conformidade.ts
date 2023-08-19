import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoNaoConformidade extends ModelBase {
  static tableName = "ProducaoNaoConformidade";
  static idColumn = ["CdNaoConformidade"];

  CdNaoConformidade!: number;
  Descricao!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdNaoConformidade",
      "Descricao",
      "FgAtivo",
      ];
  }
}

ProducaoNaoConformidade.knex(connections.plano);

export type TProducaoNaoConformidade = ModelObject<ProducaoNaoConformidade>;

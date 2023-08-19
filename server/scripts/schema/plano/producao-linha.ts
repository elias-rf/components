import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProducaoLinha extends ModelBase {
  static tableName = "ProducaoLinha";
  static idColumn = ["CdLinhaProducao"];

  CdLinhaProducao!: number;
  NmLinhaProducao!: string;
  Descricao!: string;
  FgAtivo!: string;
  

  static getFields() {
    return [
      "CdLinhaProducao",
      "NmLinhaProducao",
      "Descricao",
      "FgAtivo",
      ];
  }
}

ProducaoLinha.knex(connections.plano);

export type TProducaoLinha = ModelObject<ProducaoLinha>;

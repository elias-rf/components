import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ProjetosConfiguracao extends ModelBase {
  static tableName = "ProjetosConfiguracao";
  static idColumn = ["CdProjetosConfiguracao"];

  CdProjetosConfiguracao!: number;
  CdProjeto!: number;
  CdProduto!: string;
  QtdeProduto!: number;
  PercQtde!: number;
  CRM!: string;
  PercCRM!: number;
  

  static getFields() {
    return [
      "CdProjetosConfiguracao",
      "CdProjeto",
      "CdProduto",
      "QtdeProduto",
      "PercQtde",
      "CRM",
      "PercCRM",
      ];
  }
}

ProjetosConfiguracao.knex(connections.plano);

export type TProjetosConfiguracao = ModelObject<ProjetosConfiguracao>;

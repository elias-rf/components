import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TributacaoEstados extends ModelBase {
  static tableName = "TributacaoEstados";
  static idColumn = [];

  UfOrigem!: string;
  UfDestino!: string;
  AliqICMSEntrada!: number;
  ReducaoICMSEntrada!: number;
  AliqICMSSaidaContribuinte!: number;
  ReducaoICMSSaidaContribuinte!: number;
  AliqICMSSaidaContribuinteSimples!: number;
  ReducaoICMSSaidaContribuinteSimples!: number;
  AliqICMSSaidaNaoContribuinte!: number;
  ReducaoICMSSaidaNaoContribuinte!: number;
  DtUltAlteracao!: Date;
  AliqICMSSaidaNaoContribuinteSimples!: number;
  ReducaoICMSSaidaNaoContribuinteSimples!: number;
  

  static getFields() {
    return [
      "UfOrigem",
      "UfDestino",
      "AliqICMSEntrada",
      "ReducaoICMSEntrada",
      "AliqICMSSaidaContribuinte",
      "ReducaoICMSSaidaContribuinte",
      "AliqICMSSaidaContribuinteSimples",
      "ReducaoICMSSaidaContribuinteSimples",
      "AliqICMSSaidaNaoContribuinte",
      "ReducaoICMSSaidaNaoContribuinte",
      "DtUltAlteracao",
      "AliqICMSSaidaNaoContribuinteSimples",
      "ReducaoICMSSaidaNaoContribuinteSimples",
      ];
  }
}

TributacaoEstados.knex(connections.plano);

export type TTributacaoEstados = ModelObject<TributacaoEstados>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabBal extends ModelBase {
  static tableName = "TabBal";
  static idColumn = [];

  CdEmpresa!: number;
  CdProduto!: string;
  Contagem1!: number;
  Contagem2!: number;
  EndPrateleiraAtual!: string;
  EndPrateleiraNovo!: string;
  DtContagem!: Date;
  IdReduzido!: number;
  StatusContagem!: number;
  NumBalanco!: number;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdProduto",
      "Contagem1",
      "Contagem2",
      "EndPrateleiraAtual",
      "EndPrateleiraNovo",
      "DtContagem",
      "IdReduzido",
      "StatusContagem",
      "NumBalanco",
      ];
  }
}

TabBal.knex(connections.plano);

export type TTabBal = ModelObject<TabBal>;

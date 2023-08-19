import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabBan extends ModelBase {
  static tableName = "TabBan";
  static idColumn = ["CdBanco"];

  CdBanco!: number;
  NmBanco!: string;
  IdEmpresa!: number;
  SiglaEmpresa!: string;
  FgTipoProducao!: string;
  NmCedente!: string;
  NumeroContratoCaucao!: string;
  NumeroConvenio!: string;
  FgSacador!: string;
  FgValorMulta!: string;
  PercMulta!: number;
  FgAtivo!: string;
  LogoMarcaBanco!: string;
  

  static getFields() {
    return [
      "CdBanco",
      "NmBanco",
      "IdEmpresa",
      "SiglaEmpresa",
      "FgTipoProducao",
      "NmCedente",
      "NumeroContratoCaucao",
      "NumeroConvenio",
      "FgSacador",
      "FgValorMulta",
      "PercMulta",
      "FgAtivo",
      "LogoMarcaBanco",
      ];
  }
}

TabBan.knex(connections.plano);

export type TTabBan = ModelObject<TabBan>;

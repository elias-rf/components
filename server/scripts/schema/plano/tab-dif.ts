import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TabDif extends ModelBase {
  static tableName = "TabDif";
  static idColumn = [];

  CdEmpresa!: number;
  CdProduto!: string;
  DtLcto!: Date;
  HrLcto!: Date;
  EstAtual!: number;
  EstDif!: number;
  Motivo!: string;
  FgAtualizacao!: string;
  DtValidacao!: Date;
  Contagem!: number;
  Usuario!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdProduto",
      "DtLcto",
      "HrLcto",
      "EstAtual",
      "EstDif",
      "Motivo",
      "FgAtualizacao",
      "DtValidacao",
      "Contagem",
      "Usuario",
      ];
  }
}

TabDif.knex(connections.plano);

export type TTabDif = ModelObject<TabDif>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class TempCombo extends ModelBase {
  static tableName = "TempCombo";
  static idColumn = [];

  Estacao!: string;
  Origem!: string;
  Sequencia!: number;
  CdCombo!: string;
  CdProduto!: string;
  QtdeMinima!: number;
  QtdeMaxima!: number;
  VlUnidadeCombo!: number;
  QtdeVendida!: number;
  VlUnidadeVenda!: number;
  QtdeUtilizada!: number;
  QtdeCombo!: number;
  

  static getFields() {
    return [
      "Estacao",
      "Origem",
      "Sequencia",
      "CdCombo",
      "CdProduto",
      "QtdeMinima",
      "QtdeMaxima",
      "VlUnidadeCombo",
      "QtdeVendida",
      "VlUnidadeVenda",
      "QtdeUtilizada",
      "QtdeCombo",
      ];
  }
}

TempCombo.knex(connections.plano);

export type TTempCombo = ModelObject<TempCombo>;

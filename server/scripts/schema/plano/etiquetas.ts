import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class Etiquetas extends ModelBase {
  static tableName = "Etiquetas";
  static idColumn = [];

  CdEmpresa!: number;
  CdProduto!: string;
  Qtde!: number;
  NumSerie!: string;
  

  static getFields() {
    return [
      "CdEmpresa",
      "CdProduto",
      "Qtde",
      "NumSerie",
      ];
  }
}

Etiquetas.knex(connections.plano);

export type TEtiquetas = ModelObject<Etiquetas>;

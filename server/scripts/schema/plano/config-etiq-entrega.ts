import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigEtiqEntrega extends ModelBase {
  static tableName = "ConfigEtiqEntrega";
  static idColumn = ["CdFilial"];

  CdFilial!: number;
  QtdeEtiquetasHorizontal!: number;
  QtdeEtiquetasVertical!: number;
  AlturaEtiqueta!: number;
  LarguraEtiqueta!: number;
  EspacoDesconsiderarInicio!: number;
  EspacoDesconsiderarLateral!: number;
  EspacoDesconsiderarEntreEtiquetas!: number;
  QtdeLinhasEtiqueta!: number;
  QtdeCaracteresLinha!: number;
  Fonte!: string;
  

  static getFields() {
    return [
      "CdFilial",
      "QtdeEtiquetasHorizontal",
      "QtdeEtiquetasVertical",
      "AlturaEtiqueta",
      "LarguraEtiqueta",
      "EspacoDesconsiderarInicio",
      "EspacoDesconsiderarLateral",
      "EspacoDesconsiderarEntreEtiquetas",
      "QtdeLinhasEtiqueta",
      "QtdeCaracteresLinha",
      "Fonte",
      ];
  }
}

ConfigEtiqEntrega.knex(connections.plano);

export type TConfigEtiqEntrega = ModelObject<ConfigEtiqEntrega>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigEtiqCr extends ModelBase {
  static tableName = "ConfigEtiqCR";
  static idColumn = ["Impressora"];

  Impressora!: string;
  QtdeEtiquetasLinha!: number;
  QtdeEtiquetasColunas!: number;
  QtdeLinhasInicial!: number;
  EspLateral!: number;
  QtdeCaracteres!: number;
  QtdeLinhas!: number;
  CaracteresEntreEtiquetas!: number;
  TipoImpressao!: string;
  AlturaEtiqueta!: number;
  AlturaPagina!: number;
  Orientacao!: string;
  

  static getFields() {
    return [
      "Impressora",
      "QtdeEtiquetasLinha",
      "QtdeEtiquetasColunas",
      "QtdeLinhasInicial",
      "EspLateral",
      "QtdeCaracteres",
      "QtdeLinhas",
      "CaracteresEntreEtiquetas",
      "TipoImpressao",
      "AlturaEtiqueta",
      "AlturaPagina",
      "Orientacao",
      ];
  }
}

ConfigEtiqCr.knex(connections.plano);

export type TConfigEtiqCr = ModelObject<ConfigEtiqCr>;

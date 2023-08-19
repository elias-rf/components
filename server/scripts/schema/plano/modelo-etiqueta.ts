import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ModeloEtiqueta extends ModelBase {
  static tableName = "ModeloEtiqueta";
  static idColumn = ["NomeEtiqueta"];

  Ajuste!: number;
  AjusteDuplo!: number;
  AltCodigo!: number;
  Altura!: number;
  Espaco1!: number;
  Espaco2!: number;
  Espaco3!: number;
  Espaco4!: number;
  Espaco5!: number;
  EspacoCodigo!: number;
  EspacoDescricao!: number;
  EspacoPreco!: number;
  Largura!: number;
  LinhaInicial!: number;
  Linhas!: number;
  NomeEtiqueta!: string;
  QtdeEtiquetas!: number;
  TamFonteCodigo!: number;
  TamFonteDescricao!: number;
  TamFontePreco!: number;
  TamLinhaCodigo!: number;
  TamLinhaDescricao!: number;
  TamLinhaPreco!: number;
  

  static getFields() {
    return [
      "Ajuste",
      "AjusteDuplo",
      "AltCodigo",
      "Altura",
      "Espaco1",
      "Espaco2",
      "Espaco3",
      "Espaco4",
      "Espaco5",
      "EspacoCodigo",
      "EspacoDescricao",
      "EspacoPreco",
      "Largura",
      "LinhaInicial",
      "Linhas",
      "NomeEtiqueta",
      "QtdeEtiquetas",
      "TamFonteCodigo",
      "TamFonteDescricao",
      "TamFontePreco",
      "TamLinhaCodigo",
      "TamLinhaDescricao",
      "TamLinhaPreco",
      ];
  }
}

ModeloEtiqueta.knex(connections.plano);

export type TModeloEtiqueta = ModelObject<ModeloEtiqueta>;

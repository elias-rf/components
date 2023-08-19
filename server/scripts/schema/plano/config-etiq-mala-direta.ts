import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigEtiqMalaDireta extends ModelBase {
  static tableName = "ConfigEtiqMalaDireta";
  static idColumn = ["Impressora"];

  Impressora!: string;
  QtdeEtiquetasLinha!: number;
  QtdeEtiquetasColunas!: number;
  QtdeLinhasInicial!: number;
  EspLateral!: number;
  QtdeCaracteres!: number;
  QtdeLinhas!: number;
  CaracteresEntreEtiquetas!: number;
  LinhaRzSocial!: number;
  LinhaContato!: number;
  LinhaEndereco!: number;
  LinhaBairro!: number;
  LinhaCidade!: number;
  LinhaCep!: number;
  TipoImpressao!: string;
  AlturaLinha!: number;
  LinhaCartaoFidelidade!: number;
  Modelo!: string;
  LinhaCartao!: number;
  QtdeLinhasUltima!: number;
  

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
      "LinhaRzSocial",
      "LinhaContato",
      "LinhaEndereco",
      "LinhaBairro",
      "LinhaCidade",
      "LinhaCep",
      "TipoImpressao",
      "AlturaLinha",
      "LinhaCartaoFidelidade",
      "Modelo",
      "LinhaCartao",
      "QtdeLinhasUltima",
      ];
  }
}

ConfigEtiqMalaDireta.knex(connections.plano);

export type TConfigEtiqMalaDireta = ModelObject<ConfigEtiqMalaDireta>;

import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfiguracaoRotulos extends ModelBase {
  static tableName = "ConfiguracaoRotulos";
  static idColumn = ["CdRotulo"];

  CdRotulo!: number;
  Identificacao!: string;
  Altura!: number;
  Fonte!: string;
  NumLinhas!: number;
  NumColunas!: number;
  DtUltAlteracao!: Date;
  Deslocamento!: number;
  LinhaCliente!: number;
  LinhaMedico!: number;
  LinhaDescricao!: number;
  LinhaValidade!: number;
  CaracterDeslocamento!: string;
  Densidade!: number;
  

  static getFields() {
    return [
      "CdRotulo",
      "Identificacao",
      "Altura",
      "Fonte",
      "NumLinhas",
      "NumColunas",
      "DtUltAlteracao",
      "Deslocamento",
      "LinhaCliente",
      "LinhaMedico",
      "LinhaDescricao",
      "LinhaValidade",
      "CaracterDeslocamento",
      "Densidade",
      ];
  }
}

ConfiguracaoRotulos.knex(connections.plano);

export type TConfiguracaoRotulos = ModelObject<ConfiguracaoRotulos>;

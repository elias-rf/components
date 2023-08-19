import { connections } from "@/config/connections";
import { ModelObject } from "objection";
import { ModelBase } from "@/database/utils/model-base";

export class ConfigEtiqRemessaNota extends ModelBase {
  static tableName = "ConfigEtiqRemessaNota";
  static idColumn = ["Impressora"];

  Impressora!: string;
  CaminhoLogo!: string;
  Obs!: string;
  LinLogo!: number;
  ColLogo!: number;
  LinLbDestinatario!: number;
  ColLbDestinatario!: number;
  LinDestinatario1!: number;
  ColDestinatario1!: number;
  LinDestinatario2!: number;
  ColDestinatario2!: number;
  LinLbEndereco!: number;
  ColLbEndereco!: number;
  LinEndereco1!: number;
  ColEndereco1!: number;
  LinEndereco2!: number;
  ColEndereco2!: number;
  LinLbBairro!: number;
  ColLbBairro!: number;
  LinBairro!: number;
  ColBairro!: number;
  LinLbCEP!: number;
  ColLbCEP!: number;
  LinCEP!: number;
  ColCEP!: number;
  LinLbCidade!: number;
  ColLbCidade!: number;
  LinCidade!: number;
  ColCidade!: number;
  LinLbUF!: number;
  ColLbUF!: number;
  LinUF!: number;
  ColUF!: number;
  LinLbNumNota!: number;
  ColLbNumNota!: number;
  LinNumNota!: number;
  ColNumNota!: number;
  LinLbNumVolume!: number;
  ColLbNumVolume!: number;
  LinNumVolume!: number;
  ColNumVolume!: number;
  LinLbEmitente!: number;
  ColLbEmitente!: number;
  LinEmitente1!: number;
  ColEmitente1!: number;
  LinEmitente2!: number;
  ColEmitente2!: number;
  LinObs!: number;
  ColObs!: number;
  QtdColunas!: number;
  QtdLinhas!: number;
  EspacoColunas!: number;
  EspacoLinhas!: number;
  ColunaInicial!: number;
  LinhaInicial!: number;
  FonteCorpoEtiqueta!: string;
  FonteEmitente!: string;
  FgNegritoCorpo!: string;
  FgNegritoEmitente!: string;
  FgNegritoObs!: string;
  FonteObs!: string;
  

  static getFields() {
    return [
      "Impressora",
      "CaminhoLogo",
      "Obs",
      "LinLogo",
      "ColLogo",
      "LinLbDestinatario",
      "ColLbDestinatario",
      "LinDestinatario1",
      "ColDestinatario1",
      "LinDestinatario2",
      "ColDestinatario2",
      "LinLbEndereco",
      "ColLbEndereco",
      "LinEndereco1",
      "ColEndereco1",
      "LinEndereco2",
      "ColEndereco2",
      "LinLbBairro",
      "ColLbBairro",
      "LinBairro",
      "ColBairro",
      "LinLbCEP",
      "ColLbCEP",
      "LinCEP",
      "ColCEP",
      "LinLbCidade",
      "ColLbCidade",
      "LinCidade",
      "ColCidade",
      "LinLbUF",
      "ColLbUF",
      "LinUF",
      "ColUF",
      "LinLbNumNota",
      "ColLbNumNota",
      "LinNumNota",
      "ColNumNota",
      "LinLbNumVolume",
      "ColLbNumVolume",
      "LinNumVolume",
      "ColNumVolume",
      "LinLbEmitente",
      "ColLbEmitente",
      "LinEmitente1",
      "ColEmitente1",
      "LinEmitente2",
      "ColEmitente2",
      "LinObs",
      "ColObs",
      "QtdColunas",
      "QtdLinhas",
      "EspacoColunas",
      "EspacoLinhas",
      "ColunaInicial",
      "LinhaInicial",
      "FonteCorpoEtiqueta",
      "FonteEmitente",
      "FgNegritoCorpo",
      "FgNegritoEmitente",
      "FgNegritoObs",
      "FonteObs",
      ];
  }
}

ConfigEtiqRemessaNota.knex(connections.plano);

export type TConfigEtiqRemessaNota = ModelObject<ConfigEtiqRemessaNota>;

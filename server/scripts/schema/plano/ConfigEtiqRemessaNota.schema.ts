import { TTableDef } from "@/types/model";

export const ConfigEtiqRemessaNota: TTableDef = {
  database: "plano",
  table: "ConfigEtiqRemessaNota",
  fields: [
    {
      field: "Impressora",
      label: "Impressora",
      name: "ConfigEtiqRemessaNota_id",
      typeField: "string",
      size: 40,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "CaminhoLogo",
      label: "CaminhoLogo",
      name: "CaminhoLogo",
      typeField: "string",
      size: 256,
    },
    {
      field: "Obs",
      label: "Obs",
      name: "Obs",
      typeField: "string",
      size: 128,
    },
    {
      field: "LinLogo",
      label: "LinLogo",
      name: "LinLogo",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLogo",
      label: "ColLogo",
      name: "ColLogo",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbDestinatario",
      label: "LinLbDestinatario",
      name: "LinLbDestinatario",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbDestinatario",
      label: "ColLbDestinatario",
      name: "ColLbDestinatario",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinDestinatario1",
      label: "LinDestinatario1",
      name: "LinDestinatario1",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColDestinatario1",
      label: "ColDestinatario1",
      name: "ColDestinatario1",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinDestinatario2",
      label: "LinDestinatario2",
      name: "LinDestinatario2",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColDestinatario2",
      label: "ColDestinatario2",
      name: "ColDestinatario2",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbEndereco",
      label: "LinLbEndereco",
      name: "LinLbEndereco",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbEndereco",
      label: "ColLbEndereco",
      name: "ColLbEndereco",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinEndereco1",
      label: "LinEndereco1",
      name: "LinEndereco1",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColEndereco1",
      label: "ColEndereco1",
      name: "ColEndereco1",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinEndereco2",
      label: "LinEndereco2",
      name: "LinEndereco2",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColEndereco2",
      label: "ColEndereco2",
      name: "ColEndereco2",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbBairro",
      label: "LinLbBairro",
      name: "LinLbBairro",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbBairro",
      label: "ColLbBairro",
      name: "ColLbBairro",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinBairro",
      label: "LinBairro",
      name: "LinBairro",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColBairro",
      label: "ColBairro",
      name: "ColBairro",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbCEP",
      label: "LinLbCEP",
      name: "LinLbCEP",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbCEP",
      label: "ColLbCEP",
      name: "ColLbCEP",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinCEP",
      label: "LinCEP",
      name: "LinCEP",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColCEP",
      label: "ColCEP",
      name: "ColCEP",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbCidade",
      label: "LinLbCidade",
      name: "LinLbCidade",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbCidade",
      label: "ColLbCidade",
      name: "ColLbCidade",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinCidade",
      label: "LinCidade",
      name: "LinCidade",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColCidade",
      label: "ColCidade",
      name: "ColCidade",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbUF",
      label: "LinLbUF",
      name: "LinLbUF",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbUF",
      label: "ColLbUF",
      name: "ColLbUF",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinUF",
      label: "LinUF",
      name: "LinUF",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColUF",
      label: "ColUF",
      name: "ColUF",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbNumNota",
      label: "LinLbNumNota",
      name: "LinLbNumNota",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbNumNota",
      label: "ColLbNumNota",
      name: "ColLbNumNota",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinNumNota",
      label: "LinNumNota",
      name: "LinNumNota",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColNumNota",
      label: "ColNumNota",
      name: "ColNumNota",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbNumVolume",
      label: "LinLbNumVolume",
      name: "LinLbNumVolume",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbNumVolume",
      label: "ColLbNumVolume",
      name: "ColLbNumVolume",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinNumVolume",
      label: "LinNumVolume",
      name: "LinNumVolume",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColNumVolume",
      label: "ColNumVolume",
      name: "ColNumVolume",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinLbEmitente",
      label: "LinLbEmitente",
      name: "LinLbEmitente",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColLbEmitente",
      label: "ColLbEmitente",
      name: "ColLbEmitente",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinEmitente1",
      label: "LinEmitente1",
      name: "LinEmitente1",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColEmitente1",
      label: "ColEmitente1",
      name: "ColEmitente1",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinEmitente2",
      label: "LinEmitente2",
      name: "LinEmitente2",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColEmitente2",
      label: "ColEmitente2",
      name: "ColEmitente2",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinObs",
      label: "LinObs",
      name: "LinObs",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColObs",
      label: "ColObs",
      name: "ColObs",
      typeField: "float",
      size: 8,
    },
    {
      field: "QtdColunas",
      label: "QtdColunas",
      name: "QtdColunas",
      typeField: "float",
      size: 8,
    },
    {
      field: "QtdLinhas",
      label: "QtdLinhas",
      name: "QtdLinhas",
      typeField: "float",
      size: 8,
    },
    {
      field: "EspacoColunas",
      label: "EspacoColunas",
      name: "EspacoColunas",
      typeField: "float",
      size: 8,
    },
    {
      field: "EspacoLinhas",
      label: "EspacoLinhas",
      name: "EspacoLinhas",
      typeField: "float",
      size: 8,
    },
    {
      field: "ColunaInicial",
      label: "ColunaInicial",
      name: "ColunaInicial",
      typeField: "float",
      size: 8,
    },
    {
      field: "LinhaInicial",
      label: "LinhaInicial",
      name: "LinhaInicial",
      typeField: "float",
      size: 8,
    },
    {
      field: "FonteCorpoEtiqueta",
      label: "FonteCorpoEtiqueta",
      name: "FonteCorpoEtiqueta",
      typeField: "string",
      size: 128,
    },
    {
      field: "FonteEmitente",
      label: "FonteEmitente",
      name: "FonteEmitente",
      typeField: "string",
      size: 128,
    },
    {
      field: "FgNegritoCorpo",
      label: "FgNegritoCorpo",
      name: "FgNegritoCorpo",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgNegritoEmitente",
      label: "FgNegritoEmitente",
      name: "FgNegritoEmitente",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgNegritoObs",
      label: "FgNegritoObs",
      name: "FgNegritoObs",
      typeField: "string",
      size: 1,
    },
    {
      field: "FonteObs",
      label: "FonteObs",
      name: "FonteObs",
      typeField: "string",
      size: 128,
    },
  ],
};

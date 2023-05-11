import { TTableDef } from "@/types/model";

export const ConfigNop: TTableDef = {
  database: "plano",
  table: "ConfigNop",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "UF",
      label: "UF",
      name: "UF",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoOperacao",
      label: "TipoOperacao",
      name: "TipoOperacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoNota",
      label: "TipoNota",
      name: "TipoNota",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "TipoCliente",
      label: "TipoCliente",
      name: "TipoCliente",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "OrigemMercadoria",
      label: "OrigemMercadoria",
      name: "OrigemMercadoria",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoTributacaoICMS",
      label: "TipoTributacaoICMS",
      name: "TipoTributacaoICMS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoTributacaoIPI",
      label: "TipoTributacaoIPI",
      name: "TipoTributacaoIPI",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoTributacaoPIS",
      label: "TipoTributacaoPIS",
      name: "TipoTributacaoPIS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TipoTributacaoCOFINS",
      label: "TipoTributacaoCOFINS",
      name: "TipoTributacaoCOFINS",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Nop",
      label: "Nop",
      name: "Nop",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "FinalidadeNota",
      label: "FinalidadeNota",
      name: "FinalidadeNota",
      typeField: "int",

      allowNull: false,
    },
  ],
};

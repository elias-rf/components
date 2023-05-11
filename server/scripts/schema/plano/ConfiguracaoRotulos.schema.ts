import { TTableDef } from "@/types/model";

export const ConfiguracaoRotulos: TTableDef = {
  database: "plano",
  table: "ConfiguracaoRotulos",
  fields: [
    {
      field: "CdRotulo",
      label: "CdRotulo",
      name: "ConfiguracaoRotulos_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "Identificacao",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Altura",
      label: "Altura",
      name: "Altura",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Fonte",
      label: "Fonte",
      name: "Fonte",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumLinhas",
      label: "NumLinhas",
      name: "NumLinhas",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumColunas",
      label: "NumColunas",
      name: "NumColunas",
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
      field: "Deslocamento",
      label: "Deslocamento",
      name: "Deslocamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "LinhaCliente",
      label: "LinhaCliente",
      name: "LinhaCliente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "LinhaMedico",
      label: "LinhaMedico",
      name: "LinhaMedico",
      typeField: "float",

      scale: 4,
    },
    {
      field: "LinhaDescricao",
      label: "LinhaDescricao",
      name: "LinhaDescricao",
      typeField: "float",

      scale: 4,
    },
    {
      field: "LinhaValidade",
      label: "LinhaValidade",
      name: "LinhaValidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CaracterDeslocamento",
      label: "CaracterDeslocamento",
      name: "CaracterDeslocamento",
      typeField: "string",
    },
    {
      field: "Densidade",
      label: "Densidade",
      name: "Densidade",
      typeField: "int",
    },
  ],
};

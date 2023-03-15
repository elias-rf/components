import { TTable } from "../../../../types/model";

export const ConfiguracaoRotulos: TTable = {
  database: "plano",
  table: "ConfiguracaoRotulos",
  fields: [
    {
      field: "CdRotulo",
      label: "CdRotulo",
      name: "ConfiguracaoRotulos_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Identificacao",
      label: "Identificacao",
      name: "Identificacao",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "Altura",
      label: "Altura",
      name: "Altura",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Fonte",
      label: "Fonte",
      name: "Fonte",
      typeField: "string",
      size: 30,
      allowNull: false,
    },
    {
      field: "NumLinhas",
      label: "NumLinhas",
      name: "NumLinhas",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumColunas",
      label: "NumColunas",
      name: "NumColunas",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Deslocamento",
      label: "Deslocamento",
      name: "Deslocamento",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "LinhaCliente",
      label: "LinhaCliente",
      name: "LinhaCliente",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "LinhaMedico",
      label: "LinhaMedico",
      name: "LinhaMedico",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "LinhaDescricao",
      label: "LinhaDescricao",
      name: "LinhaDescricao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "LinhaValidade",
      label: "LinhaValidade",
      name: "LinhaValidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CaracterDeslocamento",
      label: "CaracterDeslocamento",
      name: "CaracterDeslocamento",
      typeField: "string",
      size: 1,
    },
    {
      field: "Densidade",
      label: "Densidade",
      name: "Densidade",
      typeField: "int",
      size: 2,
    },
  ],
};

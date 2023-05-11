import { TTableDef } from "@/types/model";

export const ContratoAluguelContagemMestre: TTableDef = {
  database: "plano",
  table: "ContratoAluguelContagemMestre",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DiaContr",
      label: "DiaContr",
      name: "DiaContr",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtContagem",
      label: "DtContagem",
      name: "DtContagem",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "UsuarioContagem",
      label: "UsuarioContagem",
      name: "UsuarioContagem",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "VlFranquia",
      label: "VlFranquia",
      name: "VlFranquia",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeFranquia",
      label: "QtdeFranquia",
      name: "QtdeFranquia",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "QtdeContada",
      label: "QtdeContada",
      name: "QtdeContada",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlUnitExcedente",
      label: "VlUnitExcedente",
      name: "VlUnitExcedente",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "UsuarioNota",
      label: "UsuarioNota",
      name: "UsuarioNota",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
  ],
};

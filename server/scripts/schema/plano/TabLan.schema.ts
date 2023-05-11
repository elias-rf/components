import { TTableDef } from "@/types/model";

export const TabLan: TTableDef = {
  database: "plano",
  table: "TabLan",
  fields: [
    {
      field: "CdBanco",
      label: "CdBanco",
      name: "CdBanco",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdAgencia",
      label: "CdAgencia",
      name: "CdAgencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumConta",
      label: "NumConta",
      name: "NumConta",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "NumLcto",
      label: "NumLcto",
      name: "NumLcto",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtBase",
      label: "DtBase",
      name: "DtBase",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "TipAplic",
      label: "TipAplic",
      name: "TipAplic",
      typeField: "string",
    },
    {
      field: "VlAplicado",
      label: "VlAplicado",
      name: "VlAplicado",
      typeField: "float",

      scale: 4,
    },
    {
      field: "LctoDiv",
      label: "LctoDiv",
      name: "LctoDiv",
      typeField: "int",
    },
    {
      field: "VlResgate",
      label: "VlResgate",
      name: "VlResgate",
      typeField: "float",

      scale: 4,
    },
    {
      field: "LctoResg",
      label: "LctoResg",
      name: "LctoResg",
      typeField: "int",
    },
    {
      field: "LctoRend",
      label: "LctoRend",
      name: "LctoRend",
      typeField: "int",
    },
  ],
};

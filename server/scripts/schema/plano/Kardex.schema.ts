import { TTableDef } from "@/types/model";

export const Kardex: TTableDef = {
  database: "plano",
  table: "Kardex",
  fields: [
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "float",

      scale: 4,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
    },
    {
      field: "TipoMov",
      label: "TipoMov",
      name: "TipoMov",
      typeField: "string",
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      typeField: "string",
    },
  ],
};

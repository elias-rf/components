import { TTableDef } from "@/types/model";

export const ContCliSuporte: TTableDef = {
  database: "plano",
  table: "ContCliSuporte",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumSequencia",
      label: "NumSequencia",
      name: "NumSequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "UsuarioSite",
      label: "UsuarioSite",
      name: "UsuarioSite",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "SenhaSite",
      label: "SenhaSite",
      name: "SenhaSite",
      typeField: "string",

      allowNull: false,
    },
  ],
};

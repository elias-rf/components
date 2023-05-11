import { TTableDef } from "@/types/model";

export const CadCliSuporte: TTableDef = {
  database: "plano",
  table: "CadCliSuporte",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliSuporte_id",
      typeField: "int",

      primaryKey: true,
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
    {
      field: "NmGestor",
      label: "NmGestor",
      name: "NmGestor",
      typeField: "string",
    },
    {
      field: "EmailGestor",
      label: "EmailGestor",
      name: "EmailGestor",
      typeField: "string",
    },
  ],
};

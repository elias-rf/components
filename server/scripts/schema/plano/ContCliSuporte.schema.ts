import { TTable } from "../../../../types/model";

export const ContCliSuporte: TTable = {
  database: "plano",
  table: "ContCliSuporte",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumSequencia",
      label: "NumSequencia",
      name: "NumSequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UsuarioSite",
      label: "UsuarioSite",
      name: "UsuarioSite",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "SenhaSite",
      label: "SenhaSite",
      name: "SenhaSite",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
  ],
};

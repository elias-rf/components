import { TEntity } from "../../../../types";

export const ContCliSuporte: TEntity = {
  database: "plano",
  table: "ContCliSuporte",
  schema: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumSequencia",
      label: "NumSequencia",
      name: "NumSequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "UsuarioSite",
      label: "UsuarioSite",
      name: "UsuarioSite",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "SenhaSite",
      label: "SenhaSite",
      name: "SenhaSite",
      type: "string",
      size: 64,
      allowNull: false,
    },
  ],
};

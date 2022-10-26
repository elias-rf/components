import { TEntity } from "../../../../types";

export const CadCliSuporte: TEntity = {
  database: "plano",
  table: "CadCliSuporte",
  schema: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliSuporte_id",
      type: "int",
      size: 9,
      primaryKey: true,
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
    {
      field: "NmGestor",
      label: "NmGestor",
      name: "NmGestor",
      type: "string",
      size: 64,
    },
    {
      field: "EmailGestor",
      label: "EmailGestor",
      name: "EmailGestor",
      type: "string",
      size: 128,
    },
  ],
};

import { TTable } from "../../../../types/model";

export const CadCliSuporte: TTable = {
  database: "plano",
  table: "CadCliSuporte",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliSuporte_id",
      typeField: "int",
      size: 9,
      primaryKey: true,
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
    {
      field: "NmGestor",
      label: "NmGestor",
      name: "NmGestor",
      typeField: "string",
      size: 64,
    },
    {
      field: "EmailGestor",
      label: "EmailGestor",
      name: "EmailGestor",
      typeField: "string",
      size: 128,
    },
  ],
};

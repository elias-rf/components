import { TEntity } from "../../../../types";

export const Kardex: TEntity = {
  database: "plano",
  table: "Kardex",
  fields: [
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 15,
    },
    {
      field: "TipoMov",
      label: "TipoMov",
      name: "TipoMov",
      type: "string",
      size: 1,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      type: "int",
      size: 4,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "RzSocial",
      label: "RzSocial",
      name: "RzSocial",
      type: "string",
      size: 40,
    },
  ],
};

import { TTable } from "../../../../types";

export const CadCliBloqueioCred: TTable = {
  database: "plano",
  table: "CadCliBloqueioCred",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtOcorrencia",
      label: "DtOcorrencia",
      name: "DtOcorrencia",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      type: "string",
      size: 10,
      allowNull: false,
    },
  ],
};

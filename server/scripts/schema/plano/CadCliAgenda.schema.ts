import { TTable } from "../../../../types";

export const CadCliAgenda: TTable = {
  database: "plano",
  table: "CadCliAgenda",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAgenda_id",
      type: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgTeleAtivo",
      label: "FgTeleAtivo",
      name: "FgTeleAtivo",
      type: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtultContato",
      label: "DtultContato",
      name: "DtultContato",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

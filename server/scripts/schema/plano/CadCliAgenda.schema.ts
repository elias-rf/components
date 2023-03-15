import { TTable } from "../../../../types/model";

export const CadCliAgenda: TTable = {
  database: "plano",
  table: "CadCliAgenda",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAgenda_id",
      typeField: "float",
      size: 8,
      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgTeleAtivo",
      label: "FgTeleAtivo",
      name: "FgTeleAtivo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
    {
      field: "DtultContato",
      label: "DtultContato",
      name: "DtultContato",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

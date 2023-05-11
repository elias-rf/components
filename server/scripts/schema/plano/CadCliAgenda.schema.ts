import { TTableDef } from "@/types/model";

export const CadCliAgenda: TTableDef = {
  database: "plano",
  table: "CadCliAgenda",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CadCliAgenda_id",
      typeField: "float",

      scale: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "FgTeleAtivo",
      label: "FgTeleAtivo",
      name: "FgTeleAtivo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtultContato",
      label: "DtultContato",
      name: "DtultContato",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};

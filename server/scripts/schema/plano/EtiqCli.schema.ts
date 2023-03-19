import { TTableDef } from "../../../../types/model";

export const EtiqCli: TTableDef = {
  database: "plano",
  table: "EtiqCli",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};

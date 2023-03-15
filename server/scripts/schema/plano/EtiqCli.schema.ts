import { TTable } from "../../../../types/model";

export const EtiqCli: TTable = {
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

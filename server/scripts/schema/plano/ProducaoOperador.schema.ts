import { TTableDef } from "@/types/model";

export const ProducaoOperador: TTableDef = {
  database: "plano",
  table: "ProducaoOperador",
  fields: [
    {
      field: "CdOperador",
      label: "CdOperador",
      name: "ProducaoOperador_id",
      typeField: "int",
      size: 5,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmOperador",
      label: "NmOperador",
      name: "NmOperador",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",
      size: 1,
      allowNull: false,
    },
  ],
};

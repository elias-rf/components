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

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmOperador",
      label: "NmOperador",
      name: "NmOperador",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "FgAtivo",
      label: "FgAtivo",
      name: "FgAtivo",
      typeField: "string",

      allowNull: false,
    },
  ],
};

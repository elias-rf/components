import { TTableDef } from "@/types/model";

export const Depositarios: TTableDef = {
  database: "plano",
  table: "Depositarios",
  fields: [
    {
      field: "CdDepositario",
      label: "CdDepositario",
      name: "Depositarios_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmDepositario",
      label: "NmDepositario",
      name: "NmDepositario",
      typeField: "string",

      allowNull: false,
    },
  ],
};

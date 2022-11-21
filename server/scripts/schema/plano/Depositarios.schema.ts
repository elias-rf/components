import { TTable } from "../../../../types";

export const Depositarios: TTable = {
  database: "plano",
  table: "Depositarios",
  fields: [
    {
      field: "CdDepositario",
      label: "CdDepositario",
      name: "Depositarios_id",
      type: "int",
      size: 2,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmDepositario",
      label: "NmDepositario",
      name: "NmDepositario",
      type: "string",
      size: 40,
      allowNull: false,
    },
  ],
};

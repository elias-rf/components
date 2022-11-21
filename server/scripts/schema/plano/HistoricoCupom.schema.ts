import { TTable } from "../../../../types";

export const HistoricoCupom: TTable = {
  database: "plano",
  table: "HistoricoCupom",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      type: "string",
      size: 128,
      allowNull: false,
    },
  ],
};

import { TTable } from "../../../../types/model";

export const HistoricoCupom: TTable = {
  database: "plano",
  table: "HistoricoCupom",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumCupom",
      label: "NumCupom",
      name: "NumCupom",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      typeField: "string",
      size: 128,
      allowNull: false,
    },
  ],
};

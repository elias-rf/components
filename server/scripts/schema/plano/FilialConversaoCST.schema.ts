import { TTable } from "../../../../types/model";

export const FilialConversaoCST: TTable = {
  database: "plano",
  table: "FilialConversaoCST",
  fields: [
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 6,
      allowNull: false,
    },
    {
      field: "CdFilialOrigem",
      label: "CdFilialOrigem",
      name: "CdFilialOrigem",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilialDestino",
      label: "CdFilialDestino",
      name: "CdFilialDestino",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CSTOrigem",
      label: "CSTOrigem",
      name: "CSTOrigem",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CSTDestino",
      label: "CSTDestino",
      name: "CSTDestino",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
  ],
};

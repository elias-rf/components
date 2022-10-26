import { TEntity } from "../../../../types";

export const FilialConversaoCST: TEntity = {
  database: "plano",
  table: "FilialConversaoCST",
  schema: [
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "string",
      size: 6,
      allowNull: false,
    },
    {
      field: "CdFilialOrigem",
      label: "CdFilialOrigem",
      name: "CdFilialOrigem",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilialDestino",
      label: "CdFilialDestino",
      name: "CdFilialDestino",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CSTOrigem",
      label: "CSTOrigem",
      name: "CSTOrigem",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "CSTDestino",
      label: "CSTDestino",
      name: "CSTDestino",
      type: "int",
      size: 5,
      allowNull: false,
    },
  ],
};

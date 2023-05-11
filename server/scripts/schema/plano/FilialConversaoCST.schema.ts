import { TTableDef } from "@/types/model";

export const FilialConversaoCST: TTableDef = {
  database: "plano",
  table: "FilialConversaoCST",
  fields: [
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFilialOrigem",
      label: "CdFilialOrigem",
      name: "CdFilialOrigem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilialDestino",
      label: "CdFilialDestino",
      name: "CdFilialDestino",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CSTOrigem",
      label: "CSTOrigem",
      name: "CSTOrigem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CSTDestino",
      label: "CSTDestino",
      name: "CSTDestino",
      typeField: "int",

      allowNull: false,
    },
  ],
};

import { TTableDef } from "@/types/model";

export const ObservacaoRAT: TTableDef = {
  database: "plano",
  table: "ObservacaoRAT",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroRAT",
      label: "NumeroRAT",
      name: "NumeroRAT",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
    },
  ],
};

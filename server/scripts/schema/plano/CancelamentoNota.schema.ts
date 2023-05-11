import { TTableDef } from "@/types/model";

export const CancelamentoNota: TTableDef = {
  database: "plano",
  table: "CancelamentoNota",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumNota",
      label: "NumNota",
      name: "NumNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "NmUsuario",
      label: "NmUsuario",
      name: "NmUsuario",
      typeField: "string",
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
    },
    {
      field: "CdMotivoCancelamento",
      label: "CdMotivoCancelamento",
      name: "CdMotivoCancelamento",
      typeField: "float",

      scale: 4,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",

      allowNull: false,
    },
  ],
};

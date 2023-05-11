import { TTableDef } from "@/types/model";

export const CancelamentoCupom: TTableDef = {
  database: "plano",
  table: "CancelamentoCupom",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
    },
    {
      field: "Gerente",
      label: "Gerente",
      name: "Gerente",
      typeField: "string",
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "CdMotivoCancelamento",
      label: "CdMotivoCancelamento",
      name: "CdMotivoCancelamento",
      typeField: "float",

      scale: 4,
    },
  ],
};

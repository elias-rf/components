import { TTableDef } from "../../../../types/model";

export const CancelamentoCupom: TTableDef = {
  database: "plano",
  table: "CancelamentoCupom",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NroPDV",
      label: "NroPDV",
      name: "NroPDV",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Usuario",
      label: "Usuario",
      name: "Usuario",
      typeField: "string",
      size: 10,
    },
    {
      field: "Gerente",
      label: "Gerente",
      name: "Gerente",
      typeField: "string",
      size: 10,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
      size: 80,
    },
    {
      field: "DtCancelamento",
      label: "DtCancelamento",
      name: "DtCancelamento",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "CdMotivoCancelamento",
      label: "CdMotivoCancelamento",
      name: "CdMotivoCancelamento",
      typeField: "float",
      size: 8,
      scale: 4,
    },
  ],
};

import { TTable } from "../../../../types";

export const TitCobrObservacao: TTable = {
  database: "plano",
  table: "TitCobrObservacao",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "NrDoc",
      label: "NrDoc",
      name: "NrDoc",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      type: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 1024,
    },
  ],
};

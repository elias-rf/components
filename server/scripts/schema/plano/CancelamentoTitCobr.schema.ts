import { TEntity } from "../../../../types";

export const CancelamentoTitCobr: TEntity = {
  database: "plano",
  table: "CancelamentoTitCobr",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 4,
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
      field: "NrDoc",
      label: "NrDoc",
      name: "NrDoc",
      type: "int",
      size: 4,
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
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      type: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      type: "string",
      size: 1024,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      type: "string",
      size: 3,
      allowNull: false,
    },
  ],
};

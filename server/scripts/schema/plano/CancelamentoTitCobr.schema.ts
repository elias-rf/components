import { TTableDef } from "../../../../types/model";

export const CancelamentoTitCobr: TTableDef = {
  database: "plano",
  table: "CancelamentoTitCobr",
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
      field: "SiglaDoc",
      label: "SiglaDoc",
      name: "SiglaDoc",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "NrDoc",
      label: "NrDoc",
      name: "NrDoc",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "ItemDoc",
      label: "ItemDoc",
      name: "ItemDoc",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Motivo",
      label: "Motivo",
      name: "Motivo",
      typeField: "string",
      size: 1024,
    },
    {
      field: "Modelo",
      label: "Modelo",
      name: "Modelo",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
  ],
};

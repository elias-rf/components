import { TTableDef } from "@/types/model";

export const AssocEntregadorCEP: TTableDef = {
  database: "plano",
  table: "AssocEntregadorCEP",
  fields: [
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CEPInicial",
      label: "CEPInicial",
      name: "CEPInicial",
      typeField: "string",
      size: 8,
      allowNull: false,
    },
    {
      field: "CEPFinal",
      label: "CEPFinal",
      name: "CEPFinal",
      typeField: "string",
      size: 8,
    },
  ],
};

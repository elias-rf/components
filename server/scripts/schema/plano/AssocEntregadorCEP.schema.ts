import { TEntity } from "../../../../types";

export const AssocEntregadorCEP: TEntity = {
  database: "plano",
  table: "AssocEntregadorCEP",
  schema: [
    {
      field: "CdEmitente",
      label: "CdEmitente",
      name: "CdEmitente",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CEPInicial",
      label: "CEPInicial",
      name: "CEPInicial",
      type: "string",
      size: 8,
      allowNull: false,
    },
    {
      field: "CEPFinal",
      label: "CEPFinal",
      name: "CEPFinal",
      type: "string",
      size: 8,
    },
  ],
};

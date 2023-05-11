import { TTableDef } from "@/types/model";

export const MovCreditoFornecedor: TTableDef = {
  database: "plano",
  table: "MovCreditoFornecedor",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDocOrigem",
      label: "NumDocOrigem",
      name: "NumDocOrigem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDocDestino",
      label: "NumDocDestino",
      name: "NumDocDestino",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "VlCredito",
      label: "VlCredito",
      name: "VlCredito",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "VlDebito",
      label: "VlDebito",
      name: "VlDebito",
      typeField: "float",

      scale: 4,
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

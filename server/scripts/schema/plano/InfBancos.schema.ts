import { TEntity } from "../../../../types";

export const InfBancos: TEntity = {
  database: "plano",
  table: "InfBancos",
  fields: [
    {
      field: "Caminho",
      label: "Caminho",
      name: "Caminho",
      type: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrUltAtualizacao",
      label: "HrUltAtualizacao",
      name: "HrUltAtualizacao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

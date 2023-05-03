import { TTableDef } from "@/types/model";

export const InfBancos: TTableDef = {
  database: "plano",
  table: "InfBancos",
  fields: [
    {
      field: "Caminho",
      label: "Caminho",
      name: "Caminho",
      typeField: "string",
      size: 64,
      allowNull: false,
    },
    {
      field: "DtUltAtualizacao",
      label: "DtUltAtualizacao",
      name: "DtUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "HrUltAtualizacao",
      label: "HrUltAtualizacao",
      name: "HrUltAtualizacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

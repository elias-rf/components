import { TTableDef } from "@/types/model";

export const CotacaoNiveisDesconto: TTableDef = {
  database: "plano",
  table: "CotacaoNiveisDesconto",
  fields: [
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdFabricante",
      label: "CdFabricante",
      name: "CdFabricante",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Nivel1",
      label: "Nivel1",
      name: "Nivel1",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Nivel2",
      label: "Nivel2",
      name: "Nivel2",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Nivel3",
      label: "Nivel3",
      name: "Nivel3",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
  ],
};

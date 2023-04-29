import { TTableDef } from "@mono/types/model";

export const CadProMVAEstado: TTableDef = {
  database: "plano",
  table: "CadProMVAEstado",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "PercMVA",
      label: "PercMVA",
      name: "PercMVA",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

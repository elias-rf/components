import { TEntity } from "../../../../types";

export const CadProMVAEstado: TEntity = {
  database: "plano",
  table: "CadProMVAEstado",
  schema: [
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
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      type: "string",
      size: 2,
      allowNull: false,
    },
    {
      field: "PercMVA",
      label: "PercMVA",
      name: "PercMVA",
      type: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

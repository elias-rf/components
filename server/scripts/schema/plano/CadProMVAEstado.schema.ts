import { TTableDef } from "@/types/model";

export const CadProMVAEstado: TTableDef = {
  database: "plano",
  table: "CadProMVAEstado",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Uf",
      label: "Uf",
      name: "Uf",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "PercMVA",
      label: "PercMVA",
      name: "PercMVA",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};

import { TEntity } from "@er/types/*";

export const produto_categoria: TEntity = {
  database: "plano",
  table: "CategPro",
  fields: [
    {
      field: "CdCategoria",
      label: "CdCategoria",
      name: "CategPro_id",
      type: "string",
      size: 6,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCategoria",
      label: "NmCategoria",
      name: "NmCategoria",
      type: "string",
      size: 30,
    },
    {
      field: "CdDepartamento",
      label: "CdDepartamento",
      name: "CdDepartamento",
      type: "int",
      size: 2,
    },
    {
      field: "FgListaPreco",
      label: "FgListaPreco",
      name: "FgListaPreco",
      type: "string",
      size: 1,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Mensagem",
      label: "Mensagem",
      name: "Mensagem",
      type: "string",
      size: 80,
    },
    {
      field: "PercDescMaxGerente",
      label: "PercDescMaxGerente",
      name: "PercDescMaxGerente",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "PercDescMaxVendedor",
      label: "PercDescMaxVendedor",
      name: "PercDescMaxVendedor",
      type: "float",
      size: 8,
      scale: 4,
    },
  ],
};

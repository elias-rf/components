import { TTableDef } from "@/types/model";

export const tbl_Produto_Desenho: TTableDef = {
  database: "oftalmo",
  table: "tbl_Produto_Desenho",
  fields: [
    {
      field: "fkProduto",
      label: "fkProduto",
      name: "tbl_Produto_Desenho_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
    },
    {
      field: "EtiquetaS600",
      label: "EtiquetaS600",
      name: "EtiquetaS600",
      typeField: "string",
    },
    {
      field: "EtiquetaS4M",
      label: "EtiquetaS4M",
      name: "EtiquetaS4M",
      typeField: "string",
    },
    {
      field: "EtiquetaInternaPrimParam",
      label: "EtiquetaInternaPrimParam",
      name: "EtiquetaInternaPrimParam",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "EtiquetaInternaSegParam",
      label: "EtiquetaInternaSegParam",
      name: "EtiquetaInternaSegParam",
      typeField: "int",

      defaultValue: "0",
    },
    {
      field: "EtiquetaExterna1",
      label: "EtiquetaExterna1",
      name: "EtiquetaExterna1",
      typeField: "string",
    },
    {
      field: "EtiquetaExterna2",
      label: "EtiquetaExterna2",
      name: "EtiquetaExterna2",
      typeField: "string",
    },
    {
      field: "EtiquetaExterna3",
      label: "EtiquetaExterna3",
      name: "EtiquetaExterna3",
      typeField: "string",
    },
    {
      field: "EtiquetaExterna4",
      label: "EtiquetaExterna4",
      name: "EtiquetaExterna4",
      typeField: "string",
    },
    {
      field: "EtiquetaExterna5",
      label: "EtiquetaExterna5",
      name: "EtiquetaExterna5",
      typeField: "string",
    },
    {
      field: "EtiquetaExterna6",
      label: "EtiquetaExterna6",
      name: "EtiquetaExterna6",
      typeField: "string",
    },
    {
      field: "EtiquetaExterna7",
      label: "EtiquetaExterna7",
      name: "EtiquetaExterna7",
      typeField: "string",
    },
  ],
};

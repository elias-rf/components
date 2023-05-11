import { TTableDef } from "@/types/model";

export const ConfiguracaoImpAssoc: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpAssoc",
  fields: [
    {
      field: "IdModeloArquivo",
      label: "IdModeloArquivo",
      name: "ConfiguracaoImpAssoc_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "PosicaoProduto",
      label: "PosicaoProduto",
      name: "PosicaoProduto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TamanhoProduto",
      label: "TamanhoProduto",
      name: "TamanhoProduto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PosicaoCdReferencia",
      label: "PosicaoCdReferencia",
      name: "PosicaoCdReferencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TamanhoCdReferencia",
      label: "TamanhoCdReferencia",
      name: "TamanhoCdReferencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PosicaoQtdeEmbalagem",
      label: "PosicaoQtdeEmbalagem",
      name: "PosicaoQtdeEmbalagem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TamanhoQtdeEmbalagem",
      label: "TamanhoQtdeEmbalagem",
      name: "TamanhoQtdeEmbalagem",
      typeField: "int",

      allowNull: false,
    },
  ],
};

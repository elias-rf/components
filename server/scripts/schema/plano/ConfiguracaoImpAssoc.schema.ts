import { TTableDef } from "@mono/types/model";

export const ConfiguracaoImpAssoc: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpAssoc",
  fields: [
    {
      field: "IdModeloArquivo",
      label: "IdModeloArquivo",
      name: "ConfiguracaoImpAssoc_id",
      typeField: "string",
      size: 20,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "PosicaoProduto",
      label: "PosicaoProduto",
      name: "PosicaoProduto",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TamanhoProduto",
      label: "TamanhoProduto",
      name: "TamanhoProduto",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PosicaoCdReferencia",
      label: "PosicaoCdReferencia",
      name: "PosicaoCdReferencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TamanhoCdReferencia",
      label: "TamanhoCdReferencia",
      name: "TamanhoCdReferencia",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PosicaoQtdeEmbalagem",
      label: "PosicaoQtdeEmbalagem",
      name: "PosicaoQtdeEmbalagem",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TamanhoQtdeEmbalagem",
      label: "TamanhoQtdeEmbalagem",
      name: "TamanhoQtdeEmbalagem",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
  ],
};

import { TEntity } from "../../../../types";

export const ConfiguracaoImpAssoc: TEntity = {
  database: "plano",
  table: "ConfiguracaoImpAssoc",
  schema: [
    {
      field: "IdModeloArquivo",
      label: "IdModeloArquivo",
      name: "ConfiguracaoImpAssoc_id",
      type: "string",
      size: 20,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "PosicaoProduto",
      label: "PosicaoProduto",
      name: "PosicaoProduto",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TamanhoProduto",
      label: "TamanhoProduto",
      name: "TamanhoProduto",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PosicaoCdReferencia",
      label: "PosicaoCdReferencia",
      name: "PosicaoCdReferencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TamanhoCdReferencia",
      label: "TamanhoCdReferencia",
      name: "TamanhoCdReferencia",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "PosicaoQtdeEmbalagem",
      label: "PosicaoQtdeEmbalagem",
      name: "PosicaoQtdeEmbalagem",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "TamanhoQtdeEmbalagem",
      label: "TamanhoQtdeEmbalagem",
      name: "TamanhoQtdeEmbalagem",
      type: "int",
      size: 2,
      allowNull: false,
    },
  ],
};

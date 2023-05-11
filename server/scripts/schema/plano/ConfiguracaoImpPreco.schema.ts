import { TTableDef } from "@/types/model";

export const ConfiguracaoImpPreco: TTableDef = {
  database: "plano",
  table: "ConfiguracaoImpPreco",
  fields: [
    {
      field: "IdModeloArquivo",
      label: "IdModeloArquivo",
      name: "ConfiguracaoImpPreco_id",
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
      field: "PosicaoTabela",
      label: "PosicaoTabela",
      name: "PosicaoTabela",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TamanhoTabela",
      label: "TamanhoTabela",
      name: "TamanhoTabela",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DecimaisTabela",
      label: "DecimaisTabela",
      name: "DecimaisTabela",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "PosicaoVenda",
      label: "PosicaoVenda",
      name: "PosicaoVenda",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "TamanhoVenda",
      label: "TamanhoVenda",
      name: "TamanhoVenda",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DecimaisVenda",
      label: "DecimaisVenda",
      name: "DecimaisVenda",
      typeField: "int",

      allowNull: false,
    },
  ],
};

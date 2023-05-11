import { TTableDef } from "@/types/model";

export const NotaEntradaXMLDescProduto: TTableDef = {
  database: "plano",
  table: "NotaEntradaXMLDescProduto",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumeroNota",
      label: "NumeroNota",
      name: "NumeroNota",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "SerieNota",
      label: "SerieNota",
      name: "SerieNota",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "ModeloNota",
      label: "ModeloNota",
      name: "ModeloNota",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdFornecedor",
      label: "CdFornecedor",
      name: "CdFornecedor",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DescricaoProdutoXML",
      label: "DescricaoProdutoXML",
      name: "DescricaoProdutoXML",
      typeField: "string",

      allowNull: false,
    },
  ],
};

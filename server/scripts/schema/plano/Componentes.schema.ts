import { TTableDef } from "@/types/model";

export const Componentes: TTableDef = {
  database: "plano",
  table: "Componentes",
  fields: [
    {
      field: "CdKit",
      label: "CdKit",
      name: "CdKit",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",

      scale: 4,
    },
    {
      field: "UnidadeMedida",
      label: "UnidadeMedida",
      name: "UnidadeMedida",
      typeField: "string",
    },
    {
      field: "FgQsp",
      label: "FgQsp",
      name: "FgQsp",
      typeField: "string",
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "FgTermo",
      label: "FgTermo",
      name: "FgTermo",
      typeField: "string",
    },
    {
      field: "FgExtrusao",
      label: "FgExtrusao",
      name: "FgExtrusao",
      typeField: "string",
    },
    {
      field: "CaminhoModeloImp",
      label: "CaminhoModeloImp",
      name: "CaminhoModeloImp",
      typeField: "string",
    },
  ],
};

import { TTableDef } from "@mono/types/model";

export const Componentes: TTableDef = {
  database: "plano",
  table: "Componentes",
  fields: [
    {
      field: "CdKit",
      label: "CdKit",
      name: "CdKit",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "CdProdutoAssociado",
      label: "CdProdutoAssociado",
      name: "CdProdutoAssociado",
      typeField: "string",
      size: 15,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "UnidadeMedida",
      label: "UnidadeMedida",
      name: "UnidadeMedida",
      typeField: "string",
      size: 4,
    },
    {
      field: "FgQsp",
      label: "FgQsp",
      name: "FgQsp",
      typeField: "string",
      size: 1,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "FgTermo",
      label: "FgTermo",
      name: "FgTermo",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgExtrusao",
      label: "FgExtrusao",
      name: "FgExtrusao",
      typeField: "string",
      size: 1,
    },
    {
      field: "CaminhoModeloImp",
      label: "CaminhoModeloImp",
      name: "CaminhoModeloImp",
      typeField: "string",
      size: 256,
    },
  ],
};

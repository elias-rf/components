import { TTableDef } from "@/types/model";

export const CadastroCapsulas: TTableDef = {
  database: "plano",
  table: "CadastroCapsulas",
  fields: [
    {
      field: "CdCapsula",
      label: "CdCapsula",
      name: "CadastroCapsulas_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "NmCapsula",
      label: "NmCapsula",
      name: "NmCapsula",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "CdCorCapsula",
      label: "CdCorCapsula",
      name: "CdCorCapsula",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Capacidade",
      label: "Capacidade",
      name: "Capacidade",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "UnidadeMedida",
      label: "UnidadeMedida",
      name: "UnidadeMedida",
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
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};

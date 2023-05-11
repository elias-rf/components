import { TTableDef } from "@/types/model";

export const tbl_Produto_Raio: TTableDef = {
  database: "oftalmo",
  table: "tbl_Produto_Raio",
  fields: [
    {
      field: "fkproduto",
      label: "fkproduto",
      name: "fkproduto",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkprodutoitem",
      label: "fkprodutoitem",
      name: "fkprodutoitem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Dioptria",
      label: "Dioptria",
      name: "Dioptria",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "Raio1",
      label: "Raio1",
      name: "Raio1",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "Raio2",
      label: "Raio2",
      name: "Raio2",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "BFLMin",
      label: "BFLMin",
      name: "BFLMin",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "BFL",
      label: "BFL",
      name: "BFL",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "BFLMax",
      label: "BFLMax",
      name: "BFLMax",
      typeField: "float",

      allowNull: false,
    },
    {
      field: "EspessuraMin",
      label: "EspessuraMin",
      name: "EspessuraMin",
      typeField: "float",
    },
    {
      field: "EspessuraMax",
      label: "EspessuraMax",
      name: "EspessuraMax",
      typeField: "float",
    },
  ],
};

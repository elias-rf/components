import { TTableDef } from "@/types/model";

export const ProdutoLenteContato: TTableDef = {
  database: "plano",
  table: "ProdutoLenteContato",
  fields: [
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "ProdutoLenteContato_id",
      typeField: "string",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Dioptria",
      label: "Dioptria",
      name: "Dioptria",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "Raio1",
      label: "Raio1",
      name: "Raio1",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "Raio2",
      label: "Raio2",
      name: "Raio2",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "EspessuraMinima",
      label: "EspessuraMinima",
      name: "EspessuraMinima",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "EspessuraMaxima",
      label: "EspessuraMaxima",
      name: "EspessuraMaxima",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "BLFNominal",
      label: "BLFNominal",
      name: "BLFNominal",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "BLFMinimo",
      label: "BLFMinimo",
      name: "BLFMinimo",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
    {
      field: "BLFMaximo",
      label: "BLFMaximo",
      name: "BLFMaximo",
      typeField: "int",

      scale: 2,
      allowNull: false,
    },
  ],
};

import { TTableDef } from "@/types/model";

export const tbl_OP_LIOPU_Dioptria: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_LIOPU_Dioptria",
  fields: [
    {
      field: "kOpLIODioptria",
      label: "kOpLIODioptria",
      name: "tbl_OP_LIOPU_Dioptria_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLIO",
      label: "fkOpLIO",
      name: "fkOpLIO",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
    },
    {
      field: "Dioptria",
      label: "Dioptria",
      name: "Dioptria",
      typeField: "float",
    },
    {
      field: "Controle",
      label: "Controle",
      name: "Controle",
      typeField: "string",
    },
    {
      field: "Esterilizacao",
      label: "Esterilizacao",
      name: "Esterilizacao",
      typeField: "string",
    },
    {
      field: "fkprodutoitem",
      label: "fkprodutoitem",
      name: "fkprodutoitem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DataFabricacao",
      label: "DataFabricacao",
      name: "DataFabricacao",
      typeField: "datetime",

      scale: 3,
    },
    {
      field: "Partida",
      label: "Partida",
      name: "Partida",
      typeField: "int",
    },
    {
      field: "QtdProduzida",
      label: "QtdProduzida",
      name: "QtdProduzida",
      typeField: "int",
    },
  ],
};

import { TTableDef } from "@/types/model";

export const tbl_OP_LIO_Dioptria: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_LIO_Dioptria",
  fields: [
    {
      field: "kOpLIODioptria",
      label: "kOpLIODioptria",
      name: "tbl_OP_LIO_Dioptria_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "fkOpLIO",
      label: "fkOpLIO",
      name: "fkOpLIO",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Quantidade",
      label: "Quantidade",
      name: "Quantidade",
      typeField: "int",
      size: 4,
    },
    {
      field: "Dioptria",
      label: "Dioptria",
      name: "Dioptria",
      typeField: "float",
      size: 4,
    },
    {
      field: "Controle",
      label: "Controle",
      name: "Controle",
      typeField: "string",
      size: 11,
    },
    {
      field: "Esterilizacao",
      label: "Esterilizacao",
      name: "Esterilizacao",
      typeField: "string",
      size: 4,
    },
    {
      field: "fkprodutoitem",
      label: "fkprodutoitem",
      name: "fkprodutoitem",
      typeField: "int",
      size: 4,
    },
    {
      field: "DataFabricacao",
      label: "DataFabricacao",
      name: "DataFabricacao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Partida",
      label: "Partida",
      name: "Partida",
      typeField: "int",
      size: 1,
    },
    {
      field: "QtdProduzida",
      label: "QtdProduzida",
      name: "QtdProduzida",
      typeField: "int",
      size: 4,
    },
  ],
};

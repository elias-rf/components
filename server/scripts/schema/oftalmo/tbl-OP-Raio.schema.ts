import { TEntity } from "../../../../types";

export const tbl_OP_Raio: TEntity = {
  database: "oftalmo",
  table: "tbl_OP_Raio",
  fields: [
    {
      field: "kRaio",
      label: "kRaio",
      name: "tbl_OP_Raio_id",
      type: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Dioptria",
      label: "Dioptria",
      name: "Dioptria",
      type: "float",
      size: 4,
    },
    {
      field: "Raio1",
      label: "Raio1",
      name: "Raio1",
      type: "float",
      size: 4,
    },
    {
      field: "Raio2",
      label: "Raio2",
      name: "Raio2",
      type: "float",
      size: 4,
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      type: "float",
      size: 4,
    },
    {
      field: "Diametro",
      label: "Diametro",
      name: "Diametro",
      type: "float",
      size: 4,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      type: "string",
      size: 1,
    },
  ],
};

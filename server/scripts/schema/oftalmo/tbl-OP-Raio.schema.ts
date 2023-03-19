import { TTableDef } from "../../../../types/model";

export const tbl_OP_Raio: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Raio",
  fields: [
    {
      field: "kRaio",
      label: "kRaio",
      name: "tbl_OP_Raio_id",
      typeField: "int",
      size: 4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Dioptria",
      label: "Dioptria",
      name: "Dioptria",
      typeField: "float",
      size: 4,
    },
    {
      field: "Raio1",
      label: "Raio1",
      name: "Raio1",
      typeField: "float",
      size: 4,
    },
    {
      field: "Raio2",
      label: "Raio2",
      name: "Raio2",
      typeField: "float",
      size: 4,
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "float",
      size: 4,
    },
    {
      field: "Diametro",
      label: "Diametro",
      name: "Diametro",
      typeField: "float",
      size: 4,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
      size: 1,
    },
  ],
};

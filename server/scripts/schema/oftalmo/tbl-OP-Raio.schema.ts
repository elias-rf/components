import { TTableDef } from "@/types/model";

export const tbl_OP_Raio: TTableDef = {
  database: "oftalmo",
  table: "tbl_OP_Raio",
  fields: [
    {
      field: "kRaio",
      label: "kRaio",
      name: "tbl_OP_Raio_id",
      typeField: "int",

      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "Dioptria",
      label: "Dioptria",
      name: "Dioptria",
      typeField: "float",
    },
    {
      field: "Raio1",
      label: "Raio1",
      name: "Raio1",
      typeField: "float",
    },
    {
      field: "Raio2",
      label: "Raio2",
      name: "Raio2",
      typeField: "float",
    },
    {
      field: "Espessura",
      label: "Espessura",
      name: "Espessura",
      typeField: "float",
    },
    {
      field: "Diametro",
      label: "Diametro",
      name: "Diametro",
      typeField: "float",
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",
    },
  ],
};

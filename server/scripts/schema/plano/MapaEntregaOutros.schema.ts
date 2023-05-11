import { TTableDef } from "@/types/model";

export const MapaEntregaOutros: TTableDef = {
  database: "plano",
  table: "MapaEntregaOutros",
  fields: [
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Tipo",
      label: "Tipo",
      name: "Tipo",
      typeField: "string",

      allowNull: false,
    },
    {
      field: "Valor",
      label: "Valor",
      name: "Valor",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "TipoAssoc",
      label: "TipoAssoc",
      name: "TipoAssoc",
      typeField: "string",
    },
  ],
};

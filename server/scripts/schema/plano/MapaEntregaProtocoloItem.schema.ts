import { TTableDef } from "@/types/model";

export const MapaEntregaProtocoloItem: TTableDef = {
  database: "plano",
  table: "MapaEntregaProtocoloItem",
  fields: [
    {
      field: "CdMapaEntregaProtocolo",
      label: "CdMapaEntregaProtocolo",
      name: "CdMapaEntregaProtocolo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",

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
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
    },
    {
      field: "DtInsercao",
      label: "DtInsercao",
      name: "DtInsercao",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DsObservacao",
      label: "DsObservacao",
      name: "DsObservacao",
      typeField: "string",
    },
  ],
};

import { TTableDef } from "../../../../types/model";

export const MapaEntregaProtocoloItem: TTableDef = {
  database: "plano",
  table: "MapaEntregaProtocoloItem",
  fields: [
    {
      field: "CdMapaEntregaProtocolo",
      label: "CdMapaEntregaProtocolo",
      name: "CdMapaEntregaProtocolo",
      typeField: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "NumMapa",
      label: "NumMapa",
      name: "NumMapa",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "NumDoc",
      label: "NumDoc",
      name: "NumDoc",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "Serie",
      label: "Serie",
      name: "Serie",
      typeField: "string",
      size: 3,
      allowNull: false,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 4,
    },
    {
      field: "DtInsercao",
      label: "DtInsercao",
      name: "DtInsercao",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DsObservacao",
      label: "DsObservacao",
      name: "DsObservacao",
      typeField: "string",
      size: 250,
    },
  ],
};

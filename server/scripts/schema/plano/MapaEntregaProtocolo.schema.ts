import { TTableDef } from "@mono/types/model";

export const MapaEntregaProtocolo: TTableDef = {
  database: "plano",
  table: "MapaEntregaProtocolo",
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
      field: "DtProtocolo",
      label: "DtProtocolo",
      name: "DtProtocolo",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

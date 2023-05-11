import { TTableDef } from "@/types/model";

export const MapaEntregaProtocolo: TTableDef = {
  database: "plano",
  table: "MapaEntregaProtocolo",
  fields: [
    {
      field: "CdMapaEntregaProtocolo",
      label: "CdMapaEntregaProtocolo",
      name: "CdMapaEntregaProtocolo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtProtocolo",
      label: "DtProtocolo",
      name: "DtProtocolo",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
  ],
};

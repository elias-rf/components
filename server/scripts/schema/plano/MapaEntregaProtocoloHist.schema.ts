import { TTableDef } from "@/types/model";

export const MapaEntregaProtocoloHist: TTableDef = {
  database: "plano",
  table: "MapaEntregaProtocoloHist",
  fields: [
    {
      field: "CdMapaEntregaProtocolo",
      label: "CdMapaEntregaProtocolo",
      name: "CdMapaEntregaProtocolo",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "DtHistorico",
      label: "DtHistorico",
      name: "DtHistorico",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "DsHistorico",
      label: "DsHistorico",
      name: "DsHistorico",
      typeField: "string",
    },
  ],
};

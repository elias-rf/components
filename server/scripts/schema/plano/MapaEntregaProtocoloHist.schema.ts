import { TTableDef } from "../../../../types/model";

export const MapaEntregaProtocoloHist: TTableDef = {
  database: "plano",
  table: "MapaEntregaProtocoloHist",
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
      field: "DtHistorico",
      label: "DtHistorico",
      name: "DtHistorico",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DsHistorico",
      label: "DsHistorico",
      name: "DsHistorico",
      typeField: "string",
      size: 4000,
    },
  ],
};

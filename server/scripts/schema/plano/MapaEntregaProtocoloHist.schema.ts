import { TEntity } from "../../../../types";

export const MapaEntregaProtocoloHist: TEntity = {
  database: "plano",
  table: "MapaEntregaProtocoloHist",
  fields: [
    {
      field: "CdMapaEntregaProtocolo",
      label: "CdMapaEntregaProtocolo",
      name: "CdMapaEntregaProtocolo",
      type: "int",
      size: 2,
      allowNull: false,
    },
    {
      field: "DtHistorico",
      label: "DtHistorico",
      name: "DtHistorico",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "DsHistorico",
      label: "DsHistorico",
      name: "DsHistorico",
      type: "string",
      size: 4000,
    },
  ],
};

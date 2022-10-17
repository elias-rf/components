import { TEntity } from "../../../../types";

export const MapaEntregaProtocolo: TEntity = {
  database: "plano",
  table: "MapaEntregaProtocolo",
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
      field: "DtProtocolo",
      label: "DtProtocolo",
      name: "DtProtocolo",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
  ],
};

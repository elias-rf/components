import { TTable } from "../../../../types";

export const MedicoVisitas: TTable = {
  database: "plano",
  table: "MedicoVisitas",
  fields: [
    {
      field: "Crm",
      label: "Crm",
      name: "Crm",
      type: "string",
      size: 16,
      allowNull: false,
    },
    {
      field: "DtVisita",
      label: "DtVisita",
      name: "DtVisita",
      type: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 1024,
    },
    {
      field: "CdConsultor",
      label: "CdConsultor",
      name: "CdConsultor",
      type: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      type: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "TipoContato",
      label: "TipoContato",
      name: "TipoContato",
      type: "string",
      size: 1,
    },
  ],
};

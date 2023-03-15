import { TTable } from "../../../../types/model";

export const MedicamentoInterv: TTable = {
  database: "plano",
  table: "MedicamentoInterv",
  fields: [
    {
      field: "CdIntervencao",
      label: "CdIntervencao",
      name: "CdIntervencao",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
    },
    {
      field: "CdProduto",
      label: "CdProduto",
      name: "CdProduto",
      typeField: "string",
      size: 15,
    },
    {
      field: "DtInicio",
      label: "DtInicio",
      name: "DtInicio",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtFim",
      label: "DtFim",
      name: "DtFim",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "DtUltAlteracao",
      label: "DtUltAlteracao",
      name: "DtUltAlteracao",
      typeField: "datetime",
      size: 8,
      scale: 3,
    },
    {
      field: "Posologia",
      label: "Posologia",
      name: "Posologia",
      typeField: "string",
      size: 15,
    },
  ],
};

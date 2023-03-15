import { TTable } from "../../../../types/model";

export const CadCliOcorrencias: TTable = {
  database: "plano",
  table: "CadCliOcorrencias",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",
      size: 8,
      scale: 4,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",
      size: 8,
      scale: 3,
      allowNull: false,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      typeField: "string",
      size: 1024,
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
      size: 10,
    },
    {
      field: "TpOcorrencia",
      label: "TpOcorrencia",
      name: "TpOcorrencia",
      typeField: "string",
      size: 1,
    },
    {
      field: "FgExibePreVenda",
      label: "FgExibePreVenda",
      name: "FgExibePreVenda",
      typeField: "string",
      size: 1,
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
      size: 9,
    },
  ],
};

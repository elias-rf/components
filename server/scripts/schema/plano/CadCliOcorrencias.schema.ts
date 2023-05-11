import { TTableDef } from "@/types/model";

export const CadCliOcorrencias: TTableDef = {
  database: "plano",
  table: "CadCliOcorrencias",
  fields: [
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "float",

      scale: 4,
      allowNull: false,
    },
    {
      field: "Data",
      label: "Data",
      name: "Data",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Horario",
      label: "Horario",
      name: "Horario",
      typeField: "datetime",

      scale: 3,
      allowNull: false,
    },
    {
      field: "Ocorrencia",
      label: "Ocorrencia",
      name: "Ocorrencia",
      typeField: "string",
    },
    {
      field: "CdUsuario",
      label: "CdUsuario",
      name: "CdUsuario",
      typeField: "string",
    },
    {
      field: "TpOcorrencia",
      label: "TpOcorrencia",
      name: "TpOcorrencia",
      typeField: "string",
    },
    {
      field: "FgExibePreVenda",
      label: "FgExibePreVenda",
      name: "FgExibePreVenda",
      typeField: "string",
    },
    {
      field: "NumPedido",
      label: "NumPedido",
      name: "NumPedido",
      typeField: "int",
    },
  ],
};

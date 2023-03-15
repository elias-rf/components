import { TTable } from "../../../../types/model";

export const ContratoItemObservacao: TTable = {
  database: "plano",
  table: "ContratoItemObservacao",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdCliente",
      label: "CdCliente",
      name: "CdCliente",
      typeField: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "DiaContrato",
      label: "DiaContrato",
      name: "DiaContrato",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Sequencia",
      label: "Sequencia",
      name: "Sequencia",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 512,
      allowNull: false,
    },
  ],
};

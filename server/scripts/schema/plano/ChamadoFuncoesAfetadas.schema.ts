import { TTable } from "../../../../types/model";

export const ChamadoFuncoesAfetadas: TTable = {
  database: "plano",
  table: "ChamadoFuncoesAfetadas",
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
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      typeField: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      typeField: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      typeField: "string",
      size: 256,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      typeField: "string",
      size: 256,
      allowNull: false,
    },
  ],
};

import { TEntity } from "../../../../types";

export const ChamadoFuncoesAfetadas: TEntity = {
  database: "plano",
  table: "ChamadoFuncoesAfetadas",
  fields: [
    {
      field: "CdEmpresa",
      label: "CdEmpresa",
      name: "CdEmpresa",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "CdFilial",
      label: "CdFilial",
      name: "CdFilial",
      type: "int",
      size: 9,
      allowNull: false,
    },
    {
      field: "NumeroRat",
      label: "NumeroRat",
      name: "NumeroRat",
      type: "int",
      size: 5,
      allowNull: false,
    },
    {
      field: "Funcao",
      label: "Funcao",
      name: "Funcao",
      type: "string",
      size: 32,
      allowNull: false,
    },
    {
      field: "Descricao",
      label: "Descricao",
      name: "Descricao",
      type: "string",
      size: 256,
      allowNull: false,
    },
    {
      field: "Observacao",
      label: "Observacao",
      name: "Observacao",
      type: "string",
      size: 256,
      allowNull: false,
    },
  ],
};

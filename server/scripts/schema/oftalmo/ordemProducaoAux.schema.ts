import { TTable } from "../../../../types";

export const ordemProducaoAux: TTable = {
  database: "oftalmo",
  table: "ordemProducaoAux",
  fields: [
    {
      field: "fkOp",
      label: "fkOp",
      name: "ordemProducaoAux_id",
      type: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "qtdTotal",
      label: "qtdTotal",
      name: "qtdTotal",
      type: "int",
      size: 4,
    },
    {
      field: "qtdEmProcesso",
      label: "qtdEmProcesso",
      name: "qtdEmProcesso",
      type: "int",
      size: 4,
    },
    {
      field: "qtdRejeitos",
      label: "qtdRejeitos",
      name: "qtdRejeitos",
      type: "int",
      size: 4,
    },
  ],
};

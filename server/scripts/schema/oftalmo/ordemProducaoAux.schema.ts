import { TTableDef } from "../../../../types/model";

export const ordemProducaoAux: TTableDef = {
  database: "oftalmo",
  table: "ordemProducaoAux",
  fields: [
    {
      field: "fkOp",
      label: "fkOp",
      name: "ordemProducaoAux_id",
      typeField: "int",
      size: 4,
      primaryKey: true,
      allowNull: false,
    },
    {
      field: "qtdTotal",
      label: "qtdTotal",
      name: "qtdTotal",
      typeField: "int",
      size: 4,
    },
    {
      field: "qtdEmProcesso",
      label: "qtdEmProcesso",
      name: "qtdEmProcesso",
      typeField: "int",
      size: 4,
    },
    {
      field: "qtdRejeitos",
      label: "qtdRejeitos",
      name: "qtdRejeitos",
      typeField: "int",
      size: 4,
    },
  ],
};

import { TTableDef } from "@/types/model";

export const ordemProducaoAux: TTableDef = {
  database: "oftalmo",
  table: "ordemProducaoAux",
  fields: [
    {
      field: "fkOp",
      label: "fkOp",
      name: "ordemProducaoAux_id",
      typeField: "int",

      primaryKey: true,
      allowNull: false,
    },
    {
      field: "qtdTotal",
      label: "qtdTotal",
      name: "qtdTotal",
      typeField: "int",
    },
    {
      field: "qtdEmProcesso",
      label: "qtdEmProcesso",
      name: "qtdEmProcesso",
      typeField: "int",
    },
    {
      field: "qtdRejeitos",
      label: "qtdRejeitos",
      name: "qtdRejeitos",
      typeField: "int",
    },
  ],
};

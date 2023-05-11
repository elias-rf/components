import { TTableDef } from "@/types/model";

export const tManutencaoPreventivaItem: TTableDef = {
  database: "oftalmo",
  table: "tManutencaoPreventivaItem",
  fields: [
    {
      field: "fkManutencaoPreventiva",
      label: "fkManutencaoPreventiva",
      name: "fkManutencaoPreventiva",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "fkMaquinaCheckListItem",
      label: "fkMaquinaCheckListItem",
      name: "fkMaquinaCheckListItem",
      typeField: "int",

      allowNull: false,
    },
    {
      field: "ManutencaoOK",
      label: "ManutencaoOK",
      name: "ManutencaoOK",
      typeField: "int",

      allowNull: false,
      defaultValue: "0",
    },
  ],
};

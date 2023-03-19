import { TTableDef } from "../../../../types/model";

export const tManutencaoPreventivaItem: TTableDef = {
  database: "oftalmo",
  table: "tManutencaoPreventivaItem",
  fields: [
    {
      field: "fkManutencaoPreventiva",
      label: "fkManutencaoPreventiva",
      name: "fkManutencaoPreventiva",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "fkMaquinaCheckListItem",
      label: "fkMaquinaCheckListItem",
      name: "fkMaquinaCheckListItem",
      typeField: "int",
      size: 4,
      allowNull: false,
    },
    {
      field: "ManutencaoOK",
      label: "ManutencaoOK",
      name: "ManutencaoOK",
      typeField: "int",
      size: 1,
      allowNull: false,
      defaultValue: "0",
    },
  ],
};

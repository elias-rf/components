import { TEntity } from "@er/types/*";

export const tManutencaoPreventivaItem: TEntity =
  {
  "database": "oftalmo",
  "table": "tManutencaoPreventivaItem",
  "fields": [
    {
      "field": "fkManutencaoPreventiva",
      "label": "fkManutencaoPreventiva",
      "name": "fkManutencaoPreventiva",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "fkMaquinaCheckListItem",
      "label": "fkMaquinaCheckListItem",
      "name": "fkMaquinaCheckListItem",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "ManutencaoOK",
      "label": "ManutencaoOK",
      "name": "ManutencaoOK",
      "type": "int",
      "size": 1,
      "allowNull": false,
      "defaultValue": "0"
    }
  ]
}

import { Schema } from "../schemas.type";

export const tManutencaoPreventivaItem: Schema =
  {
  "database": "oftalmo",
  "table": "tManutencaoPreventivaItem",
  "primary": [],
  "fields": {
    "fkManutencaoPreventiva": {
      "table": "tManutencaoPreventivaItem",
      "name": "fkManutencaoPreventiva",
      "data_type": "tCodigoEmpresa",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tManutencaoPreventiva",
      "foreign_key_column": "kManutencaoPreventiva",
      "is_generated": false,
      "generation_expression": null
    },
    "fkMaquinaCheckListItem": {
      "table": "tManutencaoPreventivaItem",
      "name": "fkMaquinaCheckListItem",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tMaquinaCheckListItem",
      "foreign_key_column": "kMaquinaCheckListItem",
      "is_generated": false,
      "generation_expression": null
    },
    "ManutencaoOK": {
      "table": "tManutencaoPreventivaItem",
      "name": "ManutencaoOK",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    }
  }
}

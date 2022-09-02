import { TEntity } from "@er/types/*";

export const ParametrosTipoDocumento: TEntity =
  {
  "database": "plano",
  "table": "ParametrosTipoDocumento",
  "fields": [
    {
      "field": "CdEmpresa",
      "label": "CdEmpresa",
      "name": "CdEmpresa",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "TipoDocumento",
      "label": "TipoDocumento",
      "name": "TipoDocumento",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "PercMulta",
      "label": "PercMulta",
      "name": "PercMulta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "PercJurosDia",
      "label": "PercJurosDia",
      "name": "PercJurosDia",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAlteracao",
      "label": "DtUltAlteracao",
      "name": "DtUltAlteracao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "FgCobrancaBancaria",
      "label": "FgCobrancaBancaria",
      "name": "FgCobrancaBancaria",
      "type": "string",
      "size": 1
    }
  ]
}

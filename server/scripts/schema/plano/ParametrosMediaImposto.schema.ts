import { TEntity } from "@er/types/*";

export const ParametrosMediaImposto: TEntity =
  {
  "database": "plano",
  "table": "ParametrosMediaImposto",
  "fields": [
    {
      "field": "TipoTabela",
      "label": "TipoTabela",
      "name": "TipoTabela",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CodigoNCMNBS",
      "label": "CodigoNCMNBS",
      "name": "CodigoNCMNBS",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "CodigoEX",
      "label": "CodigoEX",
      "name": "CodigoEX",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "UF",
      "label": "UF",
      "name": "UF",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "PercFederalNacional",
      "label": "PercFederalNacional",
      "name": "PercFederalNacional",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "PercFederalImportado",
      "label": "PercFederalImportado",
      "name": "PercFederalImportado",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "PercEstadual",
      "label": "PercEstadual",
      "name": "PercEstadual",
      "type": "int",
      "size": 5,
      "scale": 2,
      "allowNull": false
    },
    {
      "field": "PercMunicipal",
      "label": "PercMunicipal",
      "name": "PercMunicipal",
      "type": "int",
      "size": 5,
      "scale": 2,
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
    }
  ]
}

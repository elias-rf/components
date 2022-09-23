import { TEntity } from "@er/types/*";

export const EstoqueDiarioMestre: TEntity =
  {
  "database": "plano",
  "table": "EstoqueDiarioMestre",
  "fields": [
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 9,
      "allowNull": false
    },
    {
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumSerieECF",
      "label": "NumSerieECF",
      "name": "NumSerieECF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "MFAdicional",
      "label": "MFAdicional",
      "name": "MFAdicional",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoECF",
      "label": "TipoECF",
      "name": "TipoECF",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "MarcaECF",
      "label": "MarcaECF",
      "name": "MarcaECF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "ModeloECF",
      "label": "ModeloECF",
      "name": "ModeloECF",
      "type": "string",
      "size": 32,
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
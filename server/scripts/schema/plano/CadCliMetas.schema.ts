import { TEntity } from "@er/types/*";

export const CadCliMetas: TEntity =
  {
  "database": "plano",
  "table": "CadCliMetas",
  "fields": [
    {
      "field": "CdCliente",
      "label": "CdCliente",
      "name": "CdCliente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "MesReferencia",
      "label": "MesReferencia",
      "name": "MesReferencia",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "VlMeta",
      "label": "VlMeta",
      "name": "VlMeta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlMetaAjustada",
      "label": "VlMetaAjustada",
      "name": "VlMetaAjustada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeMeta",
      "label": "QtdeMeta",
      "name": "QtdeMeta",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeMetaAjustada",
      "label": "QtdeMetaAjustada",
      "name": "QtdeMetaAjustada",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtUltAtualizacao",
      "label": "DtUltAtualizacao",
      "name": "DtUltAtualizacao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    }
  ]
}

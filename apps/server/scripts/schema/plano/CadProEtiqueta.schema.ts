import { TEntity } from "@er/types/*";

export const CadProEtiqueta: TEntity =
  {
  "database": "plano",
  "table": "CadProEtiqueta",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CadProEtiqueta_id",
      "type": "string",
      "size": 15,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "ReceitaEtiqueta",
      "label": "ReceitaEtiqueta",
      "name": "ReceitaEtiqueta",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoEtiqueta",
      "label": "TipoEtiqueta",
      "name": "TipoEtiqueta",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoValidadeEtiqueta",
      "label": "TipoValidadeEtiqueta",
      "name": "TipoValidadeEtiqueta",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "ValidadeEtiqueta",
      "label": "ValidadeEtiqueta",
      "name": "ValidadeEtiqueta",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "DeptoEtiqueta",
      "label": "DeptoEtiqueta",
      "name": "DeptoEtiqueta",
      "type": "int",
      "size": 2,
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

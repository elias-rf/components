import { TEntity } from "@er/types/*";

export const MovimentoSerie: TEntity =
  {
  "database": "plano",
  "table": "MovimentoSerie",
  "fields": [
    {
      "field": "CdEmitente",
      "label": "CdEmitente",
      "name": "CdEmitente",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "CdFilial",
      "label": "CdFilial",
      "name": "CdFilial",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CdProduto",
      "type": "string",
      "size": 15,
      "allowNull": false
    },
    {
      "field": "DtMovimento",
      "label": "DtMovimento",
      "name": "DtMovimento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "Finalidade",
      "label": "Finalidade",
      "name": "Finalidade",
      "type": "string",
      "size": 255
    },
    {
      "field": "HrMovimento",
      "label": "HrMovimento",
      "name": "HrMovimento",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "NumDoc",
      "label": "NumDoc",
      "name": "NumDoc",
      "type": "int",
      "size": 4,
      "allowNull": false
    },
    {
      "field": "NumSerieProduto",
      "label": "NumSerieProduto",
      "name": "NumSerieProduto",
      "type": "string",
      "size": 20,
      "allowNull": false
    },
    {
      "field": "Serie",
      "label": "Serie",
      "name": "Serie",
      "type": "string",
      "size": 3,
      "allowNull": false
    },
    {
      "field": "TipoEmitente",
      "label": "TipoEmitente",
      "name": "TipoEmitente",
      "type": "string",
      "size": 1
    },
    {
      "field": "TipoMovimento",
      "label": "TipoMovimento",
      "name": "TipoMovimento",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "Modelo",
      "label": "Modelo",
      "name": "Modelo",
      "type": "string",
      "size": 3,
      "allowNull": false
    }
  ]
}

import { TEntity } from "@er/types/*";

export const ECFDocumentoNaoFiscal: TEntity =
  {
  "database": "plano",
  "table": "ECFDocumentoNaoFiscal",
  "fields": [
    {
      "field": "NumSerie",
      "label": "NumSerie",
      "name": "NumSerie",
      "type": "string",
      "size": 32,
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
      "field": "NumCOO",
      "label": "NumCOO",
      "name": "NumCOO",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "TipoDoc",
      "label": "TipoDoc",
      "name": "TipoDoc",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "NumGNF",
      "label": "NumGNF",
      "name": "NumGNF",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumGRG",
      "label": "NumGRG",
      "name": "NumGRG",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "numCDC",
      "label": "numCDC",
      "name": "numCDC",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "DtEmissao",
      "label": "DtEmissao",
      "name": "DtEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HrEmissao",
      "label": "HrEmissao",
      "name": "HrEmissao",
      "type": "datetime",
      "size": 8,
      "scale": 3,
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
      "field": "ControleSerie",
      "label": "ControleSerie",
      "name": "ControleSerie",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "ControleCOO",
      "label": "ControleCOO",
      "name": "ControleCOO",
      "type": "int",
      "size": 5,
      "allowNull": false
    }
  ]
}

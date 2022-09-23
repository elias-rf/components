import { TEntity } from "@er/types/*";

export const CupomFiscalTEFMestre: TEntity =
  {
  "database": "plano",
  "table": "CupomFiscalTEFMestre",
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
      "field": "NumECF",
      "label": "NumECF",
      "name": "NumECF",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumCupom",
      "label": "NumCupom",
      "name": "NumCupom",
      "type": "float",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Sequencia",
      "label": "Sequencia",
      "name": "Sequencia",
      "type": "int",
      "size": 2,
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
      "field": "TipoCartao",
      "label": "TipoCartao",
      "name": "TipoCartao",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "CdAdminitradora",
      "label": "CdAdminitradora",
      "name": "CdAdminitradora",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "VlRecebimento",
      "label": "VlRecebimento",
      "name": "VlRecebimento",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "QtdeParcelas",
      "label": "QtdeParcelas",
      "name": "QtdeParcelas",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Fase",
      "label": "Fase",
      "name": "Fase",
      "type": "string",
      "size": 16,
      "allowNull": false
    }
  ]
}
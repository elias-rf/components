import { TEntity } from "@er/types/*";

export const ECFTotalizador: TEntity =
  {
  "database": "plano",
  "table": "ECFTotalizador",
  "fields": [
    {
      "field": "CNPJFilial",
      "label": "CNPJFilial",
      "name": "CNPJFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
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
      "field": "DtBase",
      "label": "DtBase",
      "name": "DtBase",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "Totalizador",
      "label": "Totalizador",
      "name": "Totalizador",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Aliquota",
      "label": "Aliquota",
      "name": "Aliquota",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "VlAcumulado",
      "label": "VlAcumulado",
      "name": "VlAcumulado",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "NumSerie",
      "label": "NumSerie",
      "name": "NumSerie",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "NumReducaoZ",
      "label": "NumReducaoZ",
      "name": "NumReducaoZ",
      "type": "int",
      "size": 5,
      "allowNull": false
    },
    {
      "field": "NumUsuario",
      "label": "NumUsuario",
      "name": "NumUsuario",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "PosicaoTotalizador",
      "label": "PosicaoTotalizador",
      "name": "PosicaoTotalizador",
      "type": "int",
      "size": 2
    },
    {
      "field": "ControleFilial",
      "label": "ControleFilial",
      "name": "ControleFilial",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ControleECF",
      "label": "ControleECF",
      "name": "ControleECF",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "ControleData",
      "label": "ControleData",
      "name": "ControleData",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "ControleTotalizador",
      "label": "ControleTotalizador",
      "name": "ControleTotalizador",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "ControleAliquota",
      "label": "ControleAliquota",
      "name": "ControleAliquota",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "ControlePosicao",
      "label": "ControlePosicao",
      "name": "ControlePosicao",
      "type": "int",
      "size": 2,
      "allowNull": false
    }
  ]
}
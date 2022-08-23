import { TEntity } from "@er/types/*";

export const CadProFarmacia: TEntity =
  {
  "database": "plano",
  "table": "CadProFarmacia",
  "fields": [
    {
      "field": "CdProduto",
      "label": "CdProduto",
      "name": "CadProFarmacia_id",
      "type": "string",
      "size": 15,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "FgUsoContinuo",
      "label": "FgUsoContinuo",
      "name": "FgUsoContinuo",
      "type": "string",
      "size": 1,
      "allowNull": false
    },
    {
      "field": "PosologiaDia",
      "label": "PosologiaDia",
      "name": "PosologiaDia",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "QtdeDoses",
      "label": "QtdeDoses",
      "name": "QtdeDoses",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "NumRegistroProduto",
      "label": "NumRegistroProduto",
      "name": "NumRegistroProduto",
      "type": "string",
      "size": 16
    },
    {
      "field": "FgEnvioCaneta",
      "label": "FgEnvioCaneta",
      "name": "FgEnvioCaneta",
      "type": "string",
      "size": 1
    },
    {
      "field": "NumDosesDia",
      "label": "NumDosesDia",
      "name": "NumDosesDia",
      "type": "float",
      "size": 8,
      "scale": 4
    },
    {
      "field": "MedidaDoses",
      "label": "MedidaDoses",
      "name": "MedidaDoses",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgSNGPC",
      "label": "FgSNGPC",
      "name": "FgSNGPC",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgVendaAtiva",
      "label": "FgVendaAtiva",
      "name": "FgVendaAtiva",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTermoLabel",
      "label": "FgTermoLabel",
      "name": "FgTermoLabel",
      "type": "string",
      "size": 1
    },
    {
      "field": "ObsTermoLabel",
      "label": "ObsTermoLabel",
      "name": "ObsTermoLabel",
      "type": "string",
      "size": 512
    },
    {
      "field": "NmMedicamento",
      "label": "NmMedicamento",
      "name": "NmMedicamento",
      "type": "string",
      "size": 128
    },
    {
      "field": "Apresentacao",
      "label": "Apresentacao",
      "name": "Apresentacao",
      "type": "string",
      "size": 128
    },
    {
      "field": "FgMedicamento",
      "label": "FgMedicamento",
      "name": "FgMedicamento",
      "type": "string",
      "size": 1
    },
    {
      "field": "FgTipoMedicamento",
      "label": "FgTipoMedicamento",
      "name": "FgTipoMedicamento",
      "type": "int",
      "size": 4
    }
  ]
}

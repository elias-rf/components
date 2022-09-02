import { TEntity } from "@er/types/*";

export const ConfiguracaoImagem: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoImagem",
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
      "field": "IdImagem",
      "label": "IdImagem",
      "name": "IdImagem",
      "type": "string",
      "size": 128,
      "allowNull": false
    },
    {
      "field": "Tipo",
      "label": "Tipo",
      "name": "Tipo",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "Imagem",
      "label": "Imagem",
      "name": "Imagem",
      "type": "image",
      "size": 16,
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

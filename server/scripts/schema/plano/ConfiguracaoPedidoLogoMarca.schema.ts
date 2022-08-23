import { TEntity } from "@er/types/*";

export const ConfiguracaoPedidoLogoMarca: TEntity =
  {
  "database": "plano",
  "table": "ConfiguracaoPedidoLogoMarca",
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
      "field": "Imagem",
      "label": "Imagem",
      "name": "Imagem",
      "type": "image",
      "size": 16,
      "allowNull": false
    }
  ]
}

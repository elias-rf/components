import { TEntity } from "@er/types/*";

export const tbl_Op_Loop_Conformidade: TEntity =
  {
  "database": "oftalmo",
  "table": "tbl_Op_Loop_Conformidade",
  "fields": [
    {
      "field": "kOpLoopConformidade",
      "label": "kOpLoopConformidade",
      "name": "tbl_Op_Loop_Conformidade_id",
      "type": "int",
      "size": 4,
      "autoIncrement": true,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "fkOpLoop",
      "label": "fkOpLoop",
      "name": "fkOpLoop",
      "type": "string",
      "size": 8,
      "allowNull": false
    },
    {
      "field": "Quantidade",
      "label": "Quantidade",
      "name": "Quantidade",
      "type": "int",
      "size": 4
    },
    {
      "field": "Conformidade",
      "label": "Conformidade",
      "name": "Conformidade",
      "type": "string",
      "size": 100
    },
    {
      "field": "Analise",
      "label": "Analise",
      "name": "Analise",
      "type": "string",
      "size": 100
    },
    {
      "field": "fkOperacao",
      "label": "fkOperacao",
      "name": "fkOperacao",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "Disposicao",
      "label": "Disposicao",
      "name": "Disposicao",
      "type": "string",
      "size": 100
    },
    {
      "field": "ConformidadeAntigo",
      "label": "ConformidadeAntigo",
      "name": "ConformidadeAntigo",
      "type": "string",
      "size": 100
    },
    {
      "field": "DisposicaoAntigo",
      "label": "DisposicaoAntigo",
      "name": "DisposicaoAntigo",
      "type": "string",
      "size": 100
    }
  ]
}

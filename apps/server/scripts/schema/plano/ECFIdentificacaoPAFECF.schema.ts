import { TEntity } from "@er/types/*";

export const ECFIdentificacaoPAFECF: TEntity =
  {
  "database": "plano",
  "table": "ECFIdentificacaoPAFECF",
  "fields": [
    {
      "field": "NumSerie",
      "label": "NumSerie",
      "name": "ECFIdentificacaoPAFECF_id",
      "type": "string",
      "size": 32,
      "primaryKey": true,
      "allowNull": false
    },
    {
      "field": "MFAdicional",
      "label": "MFAdicional",
      "name": "MFAdicional",
      "type": "string",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "TipoECF",
      "label": "TipoECF",
      "name": "TipoECF",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "MarcaECF",
      "label": "MarcaECF",
      "name": "MarcaECF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "ModeloECF",
      "label": "ModeloECF",
      "name": "ModeloECF",
      "type": "string",
      "size": 32,
      "allowNull": false
    },
    {
      "field": "VersaoSB",
      "label": "VersaoSB",
      "name": "VersaoSB",
      "type": "string",
      "size": 16,
      "allowNull": false
    },
    {
      "field": "DtInstalacaoSB",
      "label": "DtInstalacaoSB",
      "name": "DtInstalacaoSB",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "HrInstalacaoSB",
      "label": "HrInstalacaoSB",
      "name": "HrInstalacaoSB",
      "type": "datetime",
      "size": 8,
      "scale": 3,
      "allowNull": false
    },
    {
      "field": "NumSequencialECF",
      "label": "NumSequencialECF",
      "name": "NumSequencialECF",
      "type": "int",
      "size": 2,
      "allowNull": false
    },
    {
      "field": "CNPJUsuario",
      "label": "CNPJUsuario",
      "name": "CNPJUsuario",
      "type": "float",
      "size": 8,
      "scale": 4,
      "allowNull": false
    },
    {
      "field": "IEUsuario",
      "label": "IEUsuario",
      "name": "IEUsuario",
      "type": "string",
      "size": 32,
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
      "field": "DtUltAlteracaoEstoque",
      "label": "DtUltAlteracaoEstoque",
      "name": "DtUltAlteracaoEstoque",
      "type": "datetime",
      "size": 8,
      "scale": 3
    },
    {
      "field": "ControleSerie",
      "label": "ControleSerie",
      "name": "ControleSerie",
      "type": "string",
      "size": 64
    }
  ]
}

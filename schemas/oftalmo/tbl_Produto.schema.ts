import { Schema } from "../schemas.type";

export const tbl_Produto: Schema =
  {
  "database": "oftalmo",
  "table": "tbl_Produto",
  "primary": [
    "kProduto"
  ],
  "fields": {
    "kProduto": {
      "table": "tbl_Produto",
      "name": "kProduto",
      "data_type": "tCodigoEmpresa",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": true,
      "is_unique": true,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "fkCategoria": {
      "table": "tbl_Produto",
      "name": "fkCategoria",
      "data_type": "varchar",
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_produto_categoria",
      "foreign_key_column": "kCategoria",
      "is_generated": false,
      "generation_expression": null
    },
    "NomeComercial": {
      "table": "tbl_Produto",
      "name": "NomeComercial",
      "data_type": "varchar",
      "max_length": 120,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "NomeInternacional": {
      "table": "tbl_Produto",
      "name": "NomeInternacional",
      "data_type": "varchar",
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "BarCode": {
      "table": "tbl_Produto",
      "name": "BarCode",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Fabricante": {
      "table": "tbl_Produto",
      "name": "Fabricante",
      "data_type": "varchar",
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "OBS": {
      "table": "tbl_Produto",
      "name": "OBS",
      "data_type": "text",
      "max_length": 16,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DescricaoTecnica": {
      "table": "tbl_Produto",
      "name": "DescricaoTecnica",
      "data_type": "text",
      "max_length": 16,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DescricaoGenerica": {
      "table": "tbl_Produto",
      "name": "DescricaoGenerica",
      "data_type": "text",
      "max_length": 16,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "CST": {
      "table": "tbl_Produto",
      "name": "CST",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Unidade": {
      "table": "tbl_Produto",
      "name": "Unidade",
      "data_type": "varchar",
      "max_length": 5,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "GrupoCredito": {
      "table": "tbl_Produto",
      "name": "GrupoCredito",
      "data_type": "varchar",
      "max_length": 20,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "Geral",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "PesoBruto": {
      "table": "tbl_Produto",
      "name": "PesoBruto",
      "data_type": "real",
      "max_length": 4,
      "numeric_precision": 24,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "100",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "VlrMin": {
      "table": "tbl_Produto",
      "name": "VlrMin",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Moeda": {
      "table": "tbl_Produto",
      "name": "Moeda",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "NBM": {
      "table": "tbl_Produto",
      "name": "NBM",
      "data_type": "varchar",
      "max_length": 30,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "FOB": {
      "table": "tbl_Produto",
      "name": "FOB",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Qtd": {
      "table": "tbl_Produto",
      "name": "Qtd",
      "data_type": "real",
      "max_length": 4,
      "numeric_precision": 24,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Diametro": {
      "table": "tbl_Produto",
      "name": "Diametro",
      "data_type": "varchar",
      "max_length": 10,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "DiametroTotal": {
      "table": "tbl_Produto",
      "name": "DiametroTotal",
      "data_type": "varchar",
      "max_length": 10,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Furo": {
      "table": "tbl_Produto",
      "name": "Furo",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Separacao": {
      "table": "tbl_Produto",
      "name": "Separacao",
      "data_type": "float",
      "max_length": 8,
      "numeric_precision": 53,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "PrazoAquisicao": {
      "table": "tbl_Produto",
      "name": "PrazoAquisicao",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": "30",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "fkNCM": {
      "table": "tbl_Produto",
      "name": "fkNCM",
      "data_type": "smallint",
      "max_length": 2,
      "numeric_precision": 5,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Sistema_NCM",
      "foreign_key_column": "KNCM",
      "is_generated": false,
      "generation_expression": null
    },
    "fkUnidade": {
      "table": "tbl_Produto",
      "name": "fkUnidade",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tSistemaUnidade",
      "foreign_key_column": "KUnidade",
      "is_generated": false,
      "generation_expression": null
    },
    "ForaDeLinha": {
      "table": "tbl_Produto",
      "name": "ForaDeLinha",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "Auditoria": {
      "table": "tbl_Produto",
      "name": "Auditoria",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ItemEstoque": {
      "table": "tbl_Produto",
      "name": "ItemEstoque",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "fkLinhaDeProducao": {
      "table": "tbl_Produto",
      "name": "fkLinhaDeProducao",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tLinhaDeProducao",
      "foreign_key_column": "kLinhaDeProducao",
      "is_generated": false,
      "generation_expression": null
    },
    "EsterilizacaoETO": {
      "table": "tbl_Produto",
      "name": "EsterilizacaoETO",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "IsCatalogo": {
      "table": "tbl_Produto",
      "name": "IsCatalogo",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "ValorCusto": {
      "table": "tbl_Produto",
      "name": "ValorCusto",
      "data_type": "money",
      "max_length": 8,
      "numeric_precision": 19,
      "numeric_scale": 4,
      "is_nullable": true,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "TaxaIPI": {
      "table": "tbl_Produto",
      "name": "TaxaIPI",
      "data_type": "real",
      "max_length": 4,
      "numeric_precision": 24,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "PRO_Ferrara": {
      "table": "tbl_Produto",
      "name": "PRO_Ferrara",
      "data_type": "bit",
      "max_length": 1,
      "numeric_precision": 1,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": "0",
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "fkSubCategoria": {
      "table": "tbl_Produto",
      "name": "fkSubCategoria",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tProdutoSubCategoria",
      "foreign_key_column": "kSubCategoria",
      "is_generated": false,
      "generation_expression": null
    },
    "CategoriaPREVISA": {
      "table": "tbl_Produto",
      "name": "CategoriaPREVISA",
      "data_type": "varchar",
      "max_length": 50,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    },
    "OrigemCST": {
      "table": "tbl_Produto",
      "name": "OrigemCST",
      "data_type": "tinyint",
      "max_length": 1,
      "numeric_precision": 3,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": false,
      "generation_expression": null
    }
  }
}

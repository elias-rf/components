export type TtOperacaoOrdemProducao = keyof typeof tOperacaoOrdemProducao.fields

export const tOperacaoOrdemProducao = {
  "database": "oftalmo",
  "table": "tOperacaoOrdemProducao",
  "primary": [
    "kOperacaoOP"
  ],
  "fields": {
    "kOperacaoOP": {
      "table": "tOperacaoOrdemProducao",
      "name": "kOperacaoOP",
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
    "fkOp": {
      "table": "tOperacaoOrdemProducao",
      "name": "fkOp",
      "data_type": "tCodigoEmpresa",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOrdemProducao",
      "foreign_key_column": "kOp",
      "is_generated": false,
      "generation_expression": null
    },
    "fkOperacaoLP": {
      "table": "tOperacaoOrdemProducao",
      "name": "fkOperacaoLP",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOperacaoLinhaDeProducao",
      "foreign_key_column": "kOperacaoLP",
      "is_generated": false,
      "generation_expression": null
    },
    "fkOperacao": {
      "table": "tOperacaoOrdemProducao",
      "name": "fkOperacao",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOperacaoDeProducao",
      "foreign_key_column": "kOperacao",
      "is_generated": false,
      "generation_expression": null
    },
    "fkFuncionario": {
      "table": "tOperacaoOrdemProducao",
      "name": "fkFuncionario",
      "data_type": "tCodigoEmpresa",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": false,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tbl_Funcionario",
      "foreign_key_column": "kFuncionario",
      "is_generated": false,
      "generation_expression": null
    },
    "fkMaquina": {
      "table": "tOperacaoOrdemProducao",
      "name": "fkMaquina",
      "data_type": "char",
      "max_length": 30,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tMaquina",
      "foreign_key_column": "kMaquina",
      "is_generated": false,
      "generation_expression": null
    },
    "DataHoraInicio": {
      "table": "tOperacaoOrdemProducao",
      "name": "DataHoraInicio",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
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
    "DataInicio": {
      "table": "tOperacaoOrdemProducao",
      "name": "DataInicio",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": true,
      "generation_expression": "(convert(smalldatetime,convert(char(10),[DataHoraInicio],101),101))"
    },
    "HoraInicio": {
      "table": "tOperacaoOrdemProducao",
      "name": "HoraInicio",
      "data_type": "char",
      "max_length": 8,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": true,
      "generation_expression": "(convert(char(8),[DataHoraInicio],108))"
    },
    "DataHoraFim": {
      "table": "tOperacaoOrdemProducao",
      "name": "DataHoraFim",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
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
    "DataFim": {
      "table": "tOperacaoOrdemProducao",
      "name": "DataFim",
      "data_type": "smalldatetime",
      "max_length": 4,
      "numeric_precision": 16,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": true,
      "generation_expression": "(convert(smalldatetime,convert(char(10),[DataHoraFim],101),101))"
    },
    "HoraFim": {
      "table": "tOperacaoOrdemProducao",
      "name": "HoraFim",
      "data_type": "char",
      "max_length": 8,
      "numeric_precision": null,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": null,
      "foreign_key_column": null,
      "is_generated": true,
      "generation_expression": "(convert(char(8),[DataHoraFim],108))"
    },
    "QtdInicial": {
      "table": "tOperacaoOrdemProducao",
      "name": "QtdInicial",
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
    "QtdConforme": {
      "table": "tOperacaoOrdemProducao",
      "name": "QtdConforme",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "QtdRetrabalho": {
      "table": "tOperacaoOrdemProducao",
      "name": "QtdRetrabalho",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
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
    "fkOperacaoRetrab": {
      "table": "tOperacaoOrdemProducao",
      "name": "fkOperacaoRetrab",
      "data_type": "int",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOperacaoDeProducao",
      "foreign_key_column": "kOperacao",
      "is_generated": false,
      "generation_expression": null
    },
    "Complemento": {
      "table": "tOperacaoOrdemProducao",
      "name": "Complemento",
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
    "fkOPFilha": {
      "table": "tOperacaoOrdemProducao",
      "name": "fkOPFilha",
      "data_type": "tCodigoEmpresa",
      "max_length": 4,
      "numeric_precision": 10,
      "numeric_scale": null,
      "is_nullable": true,
      "default_value": null,
      "is_primary_key": false,
      "is_unique": false,
      "has_auto_increment": false,
      "foreign_key_table": "tOrdemProducao",
      "foreign_key_column": "kOp",
      "is_generated": false,
      "generation_expression": null
    },
    "ViaFilhaAntiga": {
      "table": "tOperacaoOrdemProducao",
      "name": "ViaFilhaAntiga",
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
    "IdPagina": {
      "table": "tOperacaoOrdemProducao",
      "name": "IdPagina",
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
    "OPAntiga": {
      "table": "tOperacaoOrdemProducao",
      "name": "OPAntiga",
      "data_type": "varchar",
      "max_length": 8,
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
    "ClasseOP": {
      "table": "tOperacaoOrdemProducao",
      "name": "ClasseOP",
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
    "EspPriAlca": {
      "table": "tOperacaoOrdemProducao",
      "name": "EspPriAlca",
      "data_type": "char",
      "max_length": 6,
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
    "EspSegAlca": {
      "table": "tOperacaoOrdemProducao",
      "name": "EspSegAlca",
      "data_type": "char",
      "max_length": 6,
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
    }
  }
}
  
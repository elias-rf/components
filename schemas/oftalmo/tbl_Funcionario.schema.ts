export type Ttbl_Funcionario = keyof typeof tbl_Funcionario.fields

export const tbl_Funcionario = {
  database: 'oftalmo',
  table: 'tbl_Funcionario',
  primary: ['kFuncionario'] as const,
  fields: {
    kFuncionario: {
      table: 'tbl_Funcionario',
      name: 'kFuncionario',
      data_type: 'int',
      max_length: 4,
      numeric_precision: 10,
      numeric_scale: null,
      is_nullable: false,
      default_value: null,
      is_primary_key: true,
      is_unique: true,
      has_auto_increment: false,
      foreign_key_table: null,
      foreign_key_column: null,
      is_generated: false,
      generation_expression: null,
    },
    FKEmpresa: {
      table: 'tbl_Funcionario',
      name: 'FKEmpresa',
      data_type: 'int',
      max_length: 4,
      numeric_precision: 10,
      numeric_scale: null,
      is_nullable: true,
      default_value: null,
      is_primary_key: false,
      is_unique: false,
      has_auto_increment: false,
      foreign_key_table: null,
      foreign_key_column: null,
      is_generated: false,
      generation_expression: null,
    },
    NomeFuncionario: {
      table: 'tbl_Funcionario',
      name: 'NomeFuncionario',
      data_type: 'tNomePessoa',
      max_length: 150,
      numeric_precision: null,
      numeric_scale: null,
      is_nullable: true,
      default_value: null,
      is_primary_key: false,
      is_unique: false,
      has_auto_increment: false,
      foreign_key_table: null,
      foreign_key_column: null,
      is_generated: false,
      generation_expression: null,
    },
    IDN: {
      table: 'tbl_Funcionario',
      name: 'IDN',
      data_type: 'varchar',
      max_length: 20,
      numeric_precision: null,
      numeric_scale: null,
      is_nullable: true,
      default_value: null,
      is_primary_key: false,
      is_unique: false,
      has_auto_increment: false,
      foreign_key_table: null,
      foreign_key_column: null,
      is_generated: false,
      generation_expression: null,
    },
    Funcao: {
      table: 'tbl_Funcionario',
      name: 'Funcao',
      data_type: 'varchar',
      max_length: 50,
      numeric_precision: null,
      numeric_scale: null,
      is_nullable: true,
      default_value: null,
      is_primary_key: false,
      is_unique: false,
      has_auto_increment: false,
      foreign_key_table: null,
      foreign_key_column: null,
      is_generated: false,
      generation_expression: null,
    },
    Afastado: {
      table: 'tbl_Funcionario',
      name: 'Afastado',
      data_type: 'bit',
      max_length: 1,
      numeric_precision: 1,
      numeric_scale: null,
      is_nullable: false,
      default_value: null,
      is_primary_key: false,
      is_unique: false,
      has_auto_increment: false,
      foreign_key_table: null,
      foreign_key_column: null,
      is_generated: false,
      generation_expression: null,
    },
    Setor: {
      table: 'tbl_Funcionario',
      name: 'Setor',
      data_type: 'varchar',
      max_length: 30,
      numeric_precision: null,
      numeric_scale: null,
      is_nullable: true,
      default_value: null,
      is_primary_key: false,
      is_unique: false,
      has_auto_increment: false,
      foreign_key_table: null,
      foreign_key_column: null,
      is_generated: false,
      generation_expression: null,
    },
  },
}

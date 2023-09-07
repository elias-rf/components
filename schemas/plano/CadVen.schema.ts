export type TCadVen = keyof typeof CadVen.fields

export const CadVen = {
  database: 'plano',
  table: 'CadVen',
  primary: ['CdVendedor'] as const,
  fields: {
    CdVendedor: {
      table: 'CadVen',
      name: 'CdVendedor',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    NmVendedor: {
      table: 'CadVen',
      name: 'NmVendedor',
      data_type: 'varchar',
      max_length: 70,
      numeric_precision: null,
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
    Endereco: {
      table: 'CadVen',
      name: 'Endereco',
      data_type: 'varchar',
      max_length: 70,
      numeric_precision: null,
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
    Cidade: {
      table: 'CadVen',
      name: 'Cidade',
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
    Uf: {
      table: 'CadVen',
      name: 'Uf',
      data_type: 'char',
      max_length: 2,
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
    CPF: {
      table: 'CadVen',
      name: 'CPF',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    Identidade: {
      table: 'CadVen',
      name: 'Identidade',
      data_type: 'varchar',
      max_length: 18,
      numeric_precision: null,
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
    Telefone: {
      table: 'CadVen',
      name: 'Telefone',
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
    FgControle: {
      table: 'CadVen',
      name: 'FgControle',
      data_type: 'char',
      max_length: 1,
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
    Meta: {
      table: 'CadVen',
      name: 'Meta',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    Venda: {
      table: 'CadVen',
      name: 'Venda',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    ComissaoAV: {
      table: 'CadVen',
      name: 'ComissaoAV',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    ComissaoPZ: {
      table: 'CadVen',
      name: 'ComissaoPZ',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    DtUltAlteracao: {
      table: 'CadVen',
      name: 'DtUltAlteracao',
      data_type: 'datetime',
      max_length: 8,
      numeric_precision: 23,
      numeric_scale: 3,
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
    Cargo: {
      table: 'CadVen',
      name: 'Cargo',
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
    PercLimiteComissao: {
      table: 'CadVen',
      name: 'PercLimiteComissao',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    FgAtivo: {
      table: 'CadVen',
      name: 'FgAtivo',
      data_type: 'char',
      max_length: 1,
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
    Bairro: {
      table: 'CadVen',
      name: 'Bairro',
      data_type: 'varchar',
      max_length: 32,
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
    TelefoneAdicional: {
      table: 'CadVen',
      name: 'TelefoneAdicional',
      data_type: 'varchar',
      max_length: 32,
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
    Email: {
      table: 'CadVen',
      name: 'Email',
      data_type: 'varchar',
      max_length: 128,
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
    PercComissaoVarejoVista: {
      table: 'CadVen',
      name: 'PercComissaoVarejoVista',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    PercComissaoAtacadoVista: {
      table: 'CadVen',
      name: 'PercComissaoAtacadoVista',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    PercComissaoVarejoPrazo: {
      table: 'CadVen',
      name: 'PercComissaoVarejoPrazo',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    PercComissaoAtacadoPrazo: {
      table: 'CadVen',
      name: 'PercComissaoAtacadoPrazo',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    Cep: {
      table: 'CadVen',
      name: 'Cep',
      data_type: 'money',
      max_length: 8,
      numeric_precision: 19,
      numeric_scale: 4,
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
    NmFantasia: {
      table: 'CadVen',
      name: 'NmFantasia',
      data_type: 'varchar',
      max_length: 64,
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
    FgFuncionarioOS: {
      table: 'CadVen',
      name: 'FgFuncionarioOS',
      data_type: 'char',
      max_length: 1,
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
    FgTecnicoOS: {
      table: 'CadVen',
      name: 'FgTecnicoOS',
      data_type: 'char',
      max_length: 1,
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
    IdWeb: {
      table: 'CadVen',
      name: 'IdWeb',
      data_type: 'numeric',
      max_length: 5,
      numeric_precision: 9,
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

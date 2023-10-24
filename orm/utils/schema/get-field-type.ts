import { TSchema } from '@/schemas/schema.type'

export function getFieldType(field: string, schema: TSchema) {
  const type = schema.fields[field].data_type
  switch (type) {
    case 'tinyint':
    case 'int':
    case 'bit':
    case 'tCodigoEmpresa':
    case 'smallint':
    case 'numeric':
      return 'number'
    case 'char':
    case 'tNomePessoa':
    case 'text':
    case 'tMemo':
    case 'tSmallMemo':
    case 'varchar':
      return 'string'
    case 'real':
    case 'decimal':
    case 'money':
    case 'smallmoney':
      return 'number'
    case 'smalldatetime':
    case 'datetime':
      return 'string'
    default:
      return type
  }
}

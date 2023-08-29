export type TSchema = {
  database: string
  table: string
  primary: string[]
  relations?: {
    [relation: string]: {
      source: string[]
      type: string // "hasMany" | "hasOne";
      table: string
      target: string[]
    }
  }
  fields: {
    [key: string]: {
      table: string
      name: string
      data_type: string
      max_length: number
      numeric_precision: number | null
      numeric_scale: number | null
      is_nullable: boolean
      default_value: any
      is_primary_key: boolean
      is_unique: boolean
      has_auto_increment: boolean
      foreign_key_table: string | null
      foreign_key_column: string | null
      is_generated: boolean
      generation_expression: string | null
    }
  }
}
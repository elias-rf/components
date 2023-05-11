/**
 * Tipos para Banco de Dados
 */

export type TFormType = "checkbox" | "select" | "text" | "textarea";

export type TFieldType =
  | "string"
  | "float"
  | "int"
  | "boolean"
  | "currency"
  | "date"
  | "datetime"
  | "selection"
  | "tag";

export type TFieldDef = {
  name: string; // nome usado para queries
  field: string; // campo no banco de dados
  typeField?: TFieldType; // tipo do dado no banco de dados
  required?: boolean; // não pode ser vazio
  defaultValue?: any; // valor inicial
  primaryKey?: boolean; // é chave do registro
  allowNull?: boolean; // pode ser nulo
  autoIncrement?: boolean; // é incrementado pelo banco de dados
  scale?: number; // tamanho em decimais
  readOnly?: boolean; // apenas leitura
  label?: string; // rotulo para usuário
  typeForm?: TFormType; // tipo de input no formulário
  classNameField?: string; // style para field
};

export type TFields = TFieldDef[];

export type TTableDef = {
  database: string;
  table: string;
  fields: TFields;
  associates?: {
    [table: string]: {
      type: "1" | "00";
      source: string[];
      target: string[];
    };
  };
};

export type TSchema = {
  name: string; // nome usado para queries
  label?: string; // rotulo para usuário
  typeField?: TFieldType; // tipo do dado no banco de dados
  primaryKey?: boolean; // é chave do registro
  fieldClass?: string; // classe para o campo
  labelClass?: string; // classe para o label
  size?: number; // tamanho em caracteres
  visible?: boolean; // visivel em forms e tables
  sortable?: boolean; // por ser usado para ordernar
  disabled?: boolean; // input desabilitado
  allowNull?: boolean; // pode ser nulo
  defaultValue?: any; // valor inicial
}[];

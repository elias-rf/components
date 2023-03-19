import { Knex } from "knex";
/**
 * Tipos para Banco de Dados
 */

export type TConnectionNames = "oftalmo" | "plano" | "fullvision";

export type TConnection = Knex;

export type TConnections = {
  [cnn in TConnectionNames]: TConnection;
};

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
  field?: string; // campo no banco de dados
  typeField?: TFieldType; // tipo do dado no banco de dados
  required?: boolean; // não pode ser vazio
  defaultValue?: any; // valor inicial
  primaryKey?: boolean; // é chave do registro
  allowNull?: boolean; // pode ser nulo
  autoIncrement?: boolean; // é incrementado pelo banco de dados
  size?: number; // tamanho em caracteres
  scale?: number; // tamanho em decimais
  readOnly?: boolean; // apenas leitura
  label?: string; // rotulo para usuário
  visible?: boolean; // visivel em forms e tables
  sortable?: boolean; // por ser usado para ordernar
  fieldClass?: string; // classe para o campo
  labelClass?: string; // classe para o label
  disabled?: boolean; // input desabilitado
  typeForm?: TFormType; // tipo de input no formulário
};

export type TFields = TFieldDef[];

export type TTableDef = {
  database: TConnectionNames;
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

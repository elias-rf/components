import type { TFieldDef } from "../../../types";

export const agendaTelefoneSchema: TFieldDef[] = [
  {
    allowNull: false,
    label: "Ramal",
    name: "agenda_telefone_id",
    primaryKey: true,
    typeField: "int",
    classNameField: "w-full sm:w-20",
  },
  {
    allowNull: false,
    label: "Nome",
    name: "nome",
    typeField: "string",
    classNameField: "w-full sm:w-80",
  },
  {
    label: "Setor",
    name: "setor",
    typeField: "string",
    classNameField: "w-full",
  },
  {
    label: "Email",
    name: "email",
    typeField: "string",
    classNameField: "w-full sm:w-80",
  },
];

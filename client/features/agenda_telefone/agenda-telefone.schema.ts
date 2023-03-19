import type { TFieldDef } from "../../../types";

export const agendaTelefoneSchema: TFieldDef[] = [
  {
    allowNull: false,
    label: "Ramal",
    name: "agenda_telefone_id",
    primaryKey: true,
    typeField: "int",
  },
  {
    allowNull: false,
    label: "Nome",
    name: "nome",
    typeField: "string",
  },
  {
    label: "Setor",
    name: "setor",
    typeField: "string",
  },
  {
    label: "Email",
    name: "email",
    typeField: "string",
  },
];

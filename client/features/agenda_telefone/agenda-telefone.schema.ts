import type { TField } from "../../../types";

export const agendaTelefoneSchema: TField[] = [
  {
    allowNull: false,
    label: "Ramal",
    name: "agenda_telefone_id",
    primaryKey: true,
    typeField: "text",
  },
  {
    allowNull: false,
    label: "Nome",
    name: "nome",
    typeField: "text",
  },
  {
    label: "Setor",
    name: "setor",
    typeField: "text",
  },
  {
    label: "Email",
    name: "email",
    typeField: "text",
  },
];

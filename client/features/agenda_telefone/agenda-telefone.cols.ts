import { TAgendaTelefone } from "@mono/models/agenda-telefone/agenda-telefone.type";
import { ColumnDef } from "@tanstack/react-table";

export const agendaTelefoneColumns: ColumnDef<TAgendaTelefone>[] = [
  { accessorKey: "agenda_telefone_id", header: "Ramal" },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  { accessorKey: "setor", header: "Setor" },
  { accessorKey: "email", header: "Email" },
];

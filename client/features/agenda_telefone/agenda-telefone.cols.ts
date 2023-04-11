import { ColumnDef } from "@tanstack/react-table";
import { TAgendaTelefone } from "../../../model/agenda-telefone/agenda-telefone.type";

export const agendaTelefoneColumns: ColumnDef<TAgendaTelefone>[] = [
  { accessorKey: "agenda_telefone_id", header: "Ramal" },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  { accessorKey: "setor", header: "Setor" },
  { accessorKey: "email", header: "Email" },
];

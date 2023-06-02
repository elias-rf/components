import type { TColumn, TRow } from "@/client/components/grid";
import { Grid } from "@/client/components/grid";
import { TFilter, TSelection, TSort } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import { agendaTelefoneColumns } from "./agenda-telefone-columns";

type TAgendaTelefoneListProps = {
  selection: TSelection;
  onSelection: (selection: TSelection) => void;
  filter: TFilter;
  onFilter: (filter: TFilter) => void;
  sort: TSort;
  onSort: (sort: TSort) => void;
  children?: (args: { row: TRow; columns: TColumn[] }) => React.ReactNode;
};

export function AgendaTelefoneList({
  selection,
  onSelection,
  filter,
  onFilter,
  sort,
  onSort,
  children,
}: TAgendaTelefoneListProps) {
  const dataList = trpc.agendaTelefone.list.useQuery({});
  const getId = (row: any) => row.agenda_telefone_id;
  return (
    <>
      <Grid
        rows={dataList.data ?? []}
        columns={agendaTelefoneColumns}
        getId={getId}
        selection={selection}
        onSelection={onSelection}
        filter={filter}
        onFilter={onFilter}
        sort={sort}
        onSort={onSort}
      >
        {children}
      </Grid>
    </>
  );
}

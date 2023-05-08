import { TableReactCompact } from "@/client/components/table-react";
import { trpc } from "@/utils/trpc/trpc";
import {
  ColumnFiltersState,
  OnChangeFn,
  RowSelectionState,
  SortingState,
} from "@tanstack/react-table";
import { agendaTelefoneColumns } from "./agenda-telefone.cols";

type TAgendaTelefoneListProps = {
  selected: RowSelectionState;
  onSelect: OnChangeFn<RowSelectionState>;
  where: ColumnFiltersState;
  onWhere: OnChangeFn<ColumnFiltersState>;
  order: SortingState;
  onOrder: OnChangeFn<SortingState>;
  children?: (row: any) => any;
};

export function AgendaTelefoneList({
  selected,
  onSelect,
  where,
  onWhere,
  order,
  onOrder,
  children,
}: TAgendaTelefoneListProps) {
  const dataList = trpc.agendaTelefone.list.useQuery({ where, order });

  return (
    <>
      <TableReactCompact
        columns={agendaTelefoneColumns}
        data={dataList.data}
        sort={order}
        setSort={onOrder}
        setRowSelection={onSelect}
        rowSelection={selected}
        filters={where}
        setFilters={onWhere}
      >
        {children}
      </TableReactCompact>
    </>
  );
}

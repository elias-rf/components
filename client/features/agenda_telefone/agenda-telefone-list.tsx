import { TableReactCompact } from "@/client/components/table-react";
import { TAgendaTelefoneFields } from "@/models/agenda-telefone/agenda-telefone.type";
import { TIds, TOrder, TWhere } from "@/types";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { agendaTelefoneColumns } from "./agenda-telefone.cols";

type TAgendaTelefoneListProps = {
  selected: TIds;
  onSelect: (event: TIds) => void;
  where: TWhere<TAgendaTelefoneFields>[];
  onWhere: (where: TWhere[]) => void;
  order: TOrder<TAgendaTelefoneFields>[];
  onOrder: (order: TOrder[]) => void;
  children?: React.ReactNode;
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

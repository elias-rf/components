import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import React from "react";
import { TAgendaTelefoneFields } from "../../../models/agenda-telefone/agenda-telefone.type";
import { TIds, TOrder, TWhere } from "../../../types";
import { trpc } from "../../../utils/trpc/trpc";
import { Table } from "../../components/table";
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
  const table = useReactTable({
    columns: agendaTelefoneColumns,
    data: dataList.data || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <Table table={table}></Table>
    </>
  );
}

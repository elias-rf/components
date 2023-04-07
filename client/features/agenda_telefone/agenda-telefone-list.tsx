import React from "react";
import { TAgendaTelefoneFields } from "../../../model/agenda-telefone/agenda-telefone.type";
import { TIds, TOrder, TWhere } from "../../../types";
import { trpc } from "../../../utils/trpc/trpc";
import { Table } from "../../components/table/table";
import { agendaTelefoneSchema } from "./agenda-telefone.schema";

type TAgendaTelefoneListProps = {
  selected: TIds;
  onSelect: (event: any) => void;
  where: TWhere<TAgendaTelefoneFields>[];
  onWhere: (event: any) => void;
  order: TOrder<TAgendaTelefoneFields>[];
  onOrder: (event: any) => void;
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
      <Table
        schema={agendaTelefoneSchema}
        data={dataList.data}
        selected={selected}
        order={order}
        where={where}
        onSelect={onSelect}
        onWhere={onWhere}
        onOrder={onOrder}
      >
        {children}
      </Table>
    </>
  );
}

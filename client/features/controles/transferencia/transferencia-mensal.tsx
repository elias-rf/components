import { TIds } from "@mono/types";
import { day } from "@mono/utils/date/day";
import { trpc } from "@mono/utils/trpc/trpc";
import React from "react";
import { Table } from "../../../components/table/table";
import { transferenciaMensalSchema } from "./transferencia-mensal.schema";

type TransferenciaMensalProps = {
  mesCorrente: TIds;
  children?: React.ReactNode;
  dia?: string;
  onSelectEvent?: (event: any) => void;
};

export function TransferenciaMensal({
  children,
  mesCorrente,
  dia,
  onSelectEvent,
}: TransferenciaMensalProps) {
  const mesInicial = day(dia).subtract(13, "month").format("YYYY-MM");

  const dataTransferenciaMensal = trpc.nfSaida.transferenciaMensal.useQuery({
    mes: mesInicial,
  });

  return (
    <Table
      name="mensal"
      data={dataTransferenciaMensal.data}
      schema={transferenciaMensalSchema}
      selected={mesCorrente}
      onSelect={onSelectEvent}
    >
      {children}
    </Table>
  );
}

import { Table } from "@/client/components/table";
import { TSelection } from "@/types";
import { day } from "@/utils/date/day";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { transferenciaMensalSchema } from "./transferencia-mensal_schema";

type TransferenciaMensalProps = {
  mesCorrente: TSelection;
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
      rows={dataTransferenciaMensal.data || []}
      columns={transferenciaMensalSchema}
      selection={mesCorrente}
      onSelection={onSelectEvent}
      getId={(rec: any) => ({
        mes: rec.mes,
      })}
    >
      {() => <>{children}</>}
    </Table>
  );
}

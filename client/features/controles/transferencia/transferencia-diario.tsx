import { Table } from "@/client/components/table";
import { day } from "@/utils/date/day";
import { trpc } from "@/rpc/utils/trpc";
import { ReactNode } from "react";
import { transferenciaDiarioSchema } from "./transferencia-diario_schema";

type TransferenciaDiarioProps = {
  mesCorrente: { mes?: string }[];
  diaCorrente: { dia?: string }[];
  onSelect?: (event: any) => void;
  children?: ReactNode;
};

export function TransferenciaDiario({
  mesCorrente,
  diaCorrente,
  onSelect,
  children,
}: TransferenciaDiarioProps) {
  const dataTransferenciaDiario = trpc.nfSaida.transferenciaDiario.useQuery({
    inicio: day(mesCorrente[0]?.mes + "-01")
      .startOf("month")
      .format("YYYY-MM-DD"),
    fim: day(mesCorrente[0]?.mes + "-01")
      .endOf("month")
      .format("YYYY-MM-DD"),
  });

  return (
    <Table
      rows={dataTransferenciaDiario.data || []}
      columns={transferenciaDiarioSchema}
      selection={diaCorrente}
      onSelection={onSelect}
      getId={(rec: any) => ({
        dia: rec.dia,
      })}
    >
      {() => <>{children}</>}
    </Table>
  );
}

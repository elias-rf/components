import { ReactNode } from "react";
import { day } from "../../../../utils/date/day";
import { trpc } from "../../../../utils/trpc/trpc";
import { Table } from "../../../components/table/table";
import { transferenciaDiarioSchema } from "./transferencia-diario.schema";

type TransferenciaDiarioProps = {
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
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
    inicio: day(mesCorrente.mes + "-01")
      .startOf("month")
      .format("YYYY-MM-DD"),
    fim: day(mesCorrente.mes + "-01")
      .endOf("month")
      .format("YYYY-MM-DD"),
  });

  return (
    <Table
      name="diario"
      data={dataTransferenciaDiario.data}
      schema={transferenciaDiarioSchema}
      selected={diaCorrente}
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}

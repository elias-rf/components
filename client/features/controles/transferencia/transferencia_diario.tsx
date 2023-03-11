import React, { ReactNode } from "react";
import { nfSaidaStore } from "../../../../model/nf-saida/nf-saida.store";
import { TEvent } from "../../../../types";
import { day } from "../../../../utils/date/day";
import { Table } from "../../../components/table/table";

type TransferenciaDiarioProps = {
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelectEvent?: (event: TEvent) => void;
  children?: ReactNode;
};

export function TransferenciaDiario({
  mesCorrente,
  diaCorrente,
  onSelectEvent,
  children,
}: TransferenciaDiarioProps) {
  const [dataTransferenciaDiarioSchema, getTransferenciaDiarioSchema] =
    nfSaidaStore((state) => [
      state.dataTransferenciaDiarioSchema,
      state.getTransferenciaDiarioSchema,
    ]);
  const [dataTransferenciaDiario, getTransferenciaDiario] = nfSaidaStore(
    (state) => [state.dataTransferenciaDiario, state.getTransferenciaDiario]
  );

  React.useEffect(() => {
    getTransferenciaDiarioSchema();
  }, []);

  React.useEffect(() => {
    getTransferenciaDiario({
      inicio: day(mesCorrente.mes + "-01")
        .startOf("month")
        .format("YYYY-MM-DD"),
      fim: day(mesCorrente.mes + "-01")
        .endOf("month")
        .format("YYYY-MM-DD"),
    });
  }, [mesCorrente]);

  return (
    <Table
      name="diario"
      data={dataTransferenciaDiario}
      schema={dataTransferenciaDiarioSchema}
      selected={diaCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

import React from "react";
import { esterilizacaoInternaStore } from "../../../../model/esterilizacao-interna/esterilizacao-interna.store";
import { TEvent } from "../../../../types";
import { day } from "../../../../utils/date/day";
import { Table } from "../../../components/table/table";

type EsterilizacaoInternaDiarioProps = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelectEvent: (event: TEvent) => void;
};
const { getSchemaDiario, getDiario } = esterilizacaoInternaStore.getState();

export function EsterilizacaoInternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  onSelectEvent,
}: EsterilizacaoInternaDiarioProps) {
  const dataSchemaDiario = esterilizacaoInternaStore(
    (state) => state.dataSchemaDiario
  );
  const dataDiario = esterilizacaoInternaStore((state) => state.dataDiario);

  React.useEffect(() => {
    getSchemaDiario();
  }, []);

  React.useEffect(() => {
    getDiario({
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
      data={dataDiario}
      schema={dataSchemaDiario}
      selected={diaCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

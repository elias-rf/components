import React from "react";
import { esterilizacaoInternaStore } from "../../../../model/esterilizacao-interna/esterilizacao-interna.store";
import { TEvent } from "../../../../types";
import { Table } from "../../../components/table/table";

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  mesInicial: { mes: string };
  onSelectEvent?: (event: TEvent) => void;
};
const { getSchemaMensal, getMensal } = esterilizacaoInternaStore.getState();

export function EsterilizacaoInternaMensal({
  mesInicial,
  mesCorrente,
  onSelectEvent,
  children,
}: EsterilizacaoInternaMensalProp) {
  const dataSchemaMensal = esterilizacaoInternaStore(
    (state) => state.dataSchemaMensal
  );
  const dataMensal = esterilizacaoInternaStore((state) => state.dataMensal);

  React.useEffect(() => {
    getSchemaMensal();
  }, []);

  React.useEffect(() => {
    getMensal(mesInicial);
  }, [mesInicial]);

  return (
    <Table
      name="mensal"
      data={dataMensal}
      schema={dataSchemaMensal}
      selected={mesCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

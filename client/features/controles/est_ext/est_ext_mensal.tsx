import React from "react";
import { esterilizacaoExternaStore } from "../../../../model/esterilizacao-externa/esterilizacao-externa.store";
import { TEvent } from "../../../../types";
import { Table } from "../../../components/table/table";

type EsterilizacaoExternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  mesInicial: { mes: string };
  onSelectEvent?: (event: TEvent) => void;
};

const { getSchemaMensal, getMensal } = esterilizacaoExternaStore.getState();

export function EsterilizacaoExternaMensal({
  mesInicial,
  mesCorrente,
  onSelectEvent,
  children,
}: EsterilizacaoExternaMensalProp) {
  const dataSchemaMensal = esterilizacaoExternaStore(
    (state) => state.dataSchemaMensal
  );
  const dataMensal = esterilizacaoExternaStore((state) => state.dataMensal);

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

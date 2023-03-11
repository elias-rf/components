import React from "react";
import { nfSaidaStore } from "../../../../model/nf-saida/nf-saida.store";
import { TEvent, TIds } from "../../../../types";
import { day } from "../../../../utils/date/day";
import { Table } from "../../../components/table/table";

type TransferenciaMensalProps = {
  mesCorrente: TIds;
  children?: React.ReactNode;
  dia?: string;
  onSelectEvent?: (event: TEvent) => void;
};

export function TransferenciaMensal({
  children,
  mesCorrente,
  dia,
  onSelectEvent,
}: TransferenciaMensalProps) {
  const [dataTransferenciaMensalSchema, getTransferenciaMensalSchema] =
    nfSaidaStore((state) => [
      state.dataTransferenciaMensalSchema,
      state.getTransferenciaMensalSchema,
    ]);
  const [dataTransferenciaMensal, getTransferenciaMensal] = nfSaidaStore(
    (state) => [state.dataTransferenciaMensal, state.getTransferenciaMensal]
  );

  React.useEffect(() => {
    getTransferenciaMensalSchema();
  }, []);

  const mesInicial = day(dia).subtract(13, "month").format("YYYY-MM");

  React.useEffect(() => {
    getTransferenciaMensal({ mes: mesInicial });
  }, [mesInicial]);

  return (
    <Table
      name="mensal"
      data={dataTransferenciaMensal}
      schema={dataTransferenciaMensalSchema}
      selected={mesCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

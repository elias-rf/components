import React, { ReactNode } from "react";
import { nfSaidaStore } from "../../../../model/nf-saida/nf-saida.store";
import { day } from "../../../../utils/date/day";
import { Table } from "../../../components/table/table";

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
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}

import React from "react";
import { esterilizacaoExternaStore } from "../../../../model/esterilizacao-externa/esterilizacao-externa.store";
import { day } from "../../../../utils/date/day";
import { Table } from "../../../components/table/table";

type EsterilizacaoExternaDiarioProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelect: (event: any) => void;
};
const { getSchema, getDiario } = esterilizacaoExternaStore.getState();

export function EsterilizacaoExternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  onSelect,
}: EsterilizacaoExternaDiarioProp) {
  const dataSchemaDiario = esterilizacaoExternaStore(
    (state) => state.dataSchemaDiario
  );
  const dataDiario = esterilizacaoExternaStore((state) => state.dataDiario);

  React.useEffect(() => {
    getSchema();
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
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}

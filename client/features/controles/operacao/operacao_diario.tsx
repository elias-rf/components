import React from "react";
import { ordemProducaoOperacaoStore } from "../../../../model/ordem-producao-operacao/ordem-producao-operacao.store";
import { TEvent, TIds } from "../../../../types";
import { day } from "../../../../utils/date/day";
import { Table } from "../../../components/table/table";

type OperacaoDiarioProp = {
  operacao: TIds;
  mes: TIds;
  diaCorrente: TIds;
  children?: React.ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoDiario({
  operacao,
  mes,
  diaCorrente,
  children,
  onSelectEvent,
}: OperacaoDiarioProp) {
  const getSchema = ordemProducaoOperacaoStore(
    (state) => state.getDiarioSchema
  );
  const getDiario = ordemProducaoOperacaoStore((state) => state.getDiario);
  const schema = ordemProducaoOperacaoStore((state) => state.dataDiarioSchema);
  const diario = ordemProducaoOperacaoStore((state) => state.dataDiario);

  React.useEffect(() => {
    getSchema();
  }, []);

  React.useEffect(() => {
    getDiario({
      operacao: operacao.operacao,
      inicio: day(mes.mes + "-01")
        .startOf("month")
        .format("YYYY-MM-DD"),
      fim: day(mes.mes + "-01")
        .endOf("month")
        .format("YYYY-MM-DD"),
    });
  }, [mes, operacao]);

  return (
    <Table
      name="diario"
      data={diario}
      schema={schema}
      selected={diaCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

import React from "react";
import { TEvent, TFieldClient, TIds } from "../../../../types";
import { isEmpty } from "../../../../utils/identify/is_empty";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { operacaoService } from "../../../service/operacao.service";

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
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await operacaoService.schemaDiario();
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      if (isEmpty(operacao.operacao) || isEmpty(mes.mes)) {
        setData([]);
        return;
      }
      const rsp = await operacaoService.diario(
        operacao.operacao,
        day(mes.mes + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mes.mes + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
      setData(rsp);
    }
    getData();
  }, [mes, operacao]);

  return (
    <Table
      name="diario"
      data={data}
      schema={schema}
      selected={diaCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

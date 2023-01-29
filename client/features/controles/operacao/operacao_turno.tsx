import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { isEmpty } from "../../../../utils/identify/is_empty";
import { Table } from "../../../components/table/table";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoTurnoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoTurno({
  operacao,
  dia,
  onSelectEvent,
}: OperacaoTurnoProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await operacaoService.schemaTurno();
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      if (isEmpty(operacao.operacao) || isEmpty(dia.dia)) {
        setData([]);
        return;
      }
      const rsp = await operacaoService.turno(
        operacao.operacao || "",
        dia.dia || ""
      );
      setData(rsp);
    }
    getData();
  }, [dia, operacao]);

  return (
    <Table
      data={data}
      schema={schema}
      onSelectEvent={onSelectEvent}
    ></Table>
  );
}

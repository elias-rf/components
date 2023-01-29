import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { esterilizacaoInternaService } from "../../../service/esterilizacao-interna.service";

type EsterilizacaoInternaDiarioProps = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelectEvent: (event: TEvent) => void;
};

export function EsterilizacaoInternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  onSelectEvent,
}: EsterilizacaoInternaDiarioProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await esterilizacaoInternaService.schemaDiario();
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      if (mesCorrente.mes === undefined) {
        setData([]);
        return;
      }
      const rsp = await esterilizacaoInternaService.diario(
        day(mesCorrente.mes + "-01")
          .startOf("month")
          .format("YYYY-MM-DD"),
        day(mesCorrente.mes + "-01")
          .endOf("month")
          .format("YYYY-MM-DD")
      );
      setData(rsp);
    }
    getData();
  }, [mesCorrente]);

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

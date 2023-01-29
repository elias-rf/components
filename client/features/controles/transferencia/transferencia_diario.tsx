import React, { ReactNode } from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { transferenciaService } from "../../../service/transferencia.service";

type TransferenciaDiarioProps = {
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelectEvent?: (event: TEvent) => void;
  children?: ReactNode;
};
export function TransferenciaDiario({
  mesCorrente,
  diaCorrente,
  onSelectEvent,
  children,
}: TransferenciaDiarioProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await transferenciaService.schemaDiario();
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      const rsp = await transferenciaService.diario(
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

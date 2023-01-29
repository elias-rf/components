import React from "react";
import { TEvent, TFieldClient, TIds } from "../../../../types";
import { cache } from "../../../../utils/cache";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { transferenciaService } from "../../../service/transferencia.service";

type TransferenciaMensalProps = {
  mesCorrente: TIds;
  children?: React.ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};
export function TransferenciaMensal({
  children,
  mesCorrente,
  onSelectEvent,
}: TransferenciaMensalProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await cache.fetch({
        key: "transferenciaService.schemaMensal",
        callback: transferenciaService.schemaMensal,
      });
      setSchema(rsp);
    }
    getSchema();
  }, []);

  const mesInicial = day().subtract(13, "month").format("YYYY-MM");

  React.useEffect(() => {
    async function getData() {
      const rsp = await cache.fetch({
        key: "transferenciaService.mensal",
        callback: transferenciaService.mensal,
        args: [mesInicial],
      });
      setData(rsp);
    }
    getData();
  }, [mesInicial]);

  return (
    <Table
      name="mensal"
      data={data}
      schema={schema}
      selected={mesCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

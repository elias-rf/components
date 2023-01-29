import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { cache } from "../../../../utils/cache";
import { Table } from "../../../components/table/table";
import { day } from "../../../lib/day";
import { esterilizacaoExternaService } from "../../../service/esterilizacao-externa.service";

type EsterilizacaoExternaDiarioProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  diaCorrente: { dia?: string };
  onSelectEvent: (event: TEvent) => void;
};

export function EsterilizacaoExternaDiario({
  children,
  mesCorrente,
  diaCorrente,
  onSelectEvent,
}: EsterilizacaoExternaDiarioProp) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await cache.fetch({
        key: "esterilizacaoExternaService.schemaDiario",
        callback: esterilizacaoExternaService.schemaDiario,
        expiresInSeconds: 3600,
        debug: true,
      });
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
      const rsp = await esterilizacaoExternaService.diario(
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

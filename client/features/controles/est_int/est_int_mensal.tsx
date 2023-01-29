import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { cache } from "../../../../utils/cache";
import { Table } from "../../../components/table/table";
import { esterilizacaoInternaService } from "../../../service/esterilizacao-interna.service";

type EsterilizacaoInternaMensalProp = {
  children?: React.ReactNode;
  mesCorrente: { mes?: string };
  mesInicial: { mes: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function EsterilizacaoInternaMensal({
  mesInicial,
  mesCorrente,
  onSelectEvent,
  children,
}: EsterilizacaoInternaMensalProp) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await cache.fetch({
        key: "esterilizacaoInternaService.schemaMensal",
        callback: esterilizacaoInternaService.schemaMensal,
      });
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      const rsp = await cache.fetch({
        key: "esterilizacaoInternaService.mensal",
        callback: esterilizacaoInternaService.mensal,
        args: [mesInicial.mes],
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

import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { Table } from "../../../components/table/table";
import { esterilizacaoInternaService } from "../../../service/esterilizacao-interna.service";

type EsterilizacaoInternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent: (event: TEvent) => void;
};

export function EsterilizacaoInternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoInternaModeloProp) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await esterilizacaoInternaService.schemaModelo();
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      if (diaCorrente === undefined || produtoCorrente === undefined) {
        setData([]);
        return;
      }

      const rsp = await esterilizacaoInternaService.modelo(
        diaCorrente.dia || "",
        produtoCorrente.produto || ""
      );
      setData(rsp);
    }
    getData();
  }, [diaCorrente, produtoCorrente]);

  return (
    <Table
      name="modelo"
      data={data}
      schema={schema}
      onSelectEvent={onSelectEvent}
    ></Table>
  );
}

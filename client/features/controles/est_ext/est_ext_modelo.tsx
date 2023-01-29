import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { Table } from "../../../components/table/table";
import { esterilizacaoExternaService } from "../../../service/esterilizacao-externa.service";

type EsterilizacaoExternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent: (event: TEvent) => void;
};

export function EsterilizacaoExternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoExternaModeloProp) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await esterilizacaoExternaService.schemaModelo();
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

      const rsp = await esterilizacaoExternaService.modelo(
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

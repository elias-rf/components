import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { Table } from "../../../components/table";
import { esterilizacaoInternaService } from "../../../service/esterilizacao-interna.service";

type EsterilizacaoInternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function EsterilizacaoInternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoInternaProdutoProp) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await esterilizacaoInternaService.schemaProduto();
      setSchema(rsp);
    }
    getSchema();
  }, []);

  React.useEffect(() => {
    async function getData() {
      if (diaCorrente.dia === undefined) {
        setData([]);
        return;
      }
      const rsp = await esterilizacaoInternaService.produto(
        diaCorrente.dia || ""
      );
      setData(rsp);
    }
    getData();
  }, [diaCorrente]);

  return (
    <Table
      name="produto"
      data={data}
      schema={schema}
      selected={produtoCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

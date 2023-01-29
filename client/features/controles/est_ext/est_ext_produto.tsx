import React from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { Table } from "../../../components/table/table";
import { esterilizacaoExternaService } from "../../../service/esterilizacao-externa.service";

type EsterilizacaoExternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent?: (event: TEvent) => void;
};

export function EsterilizacaoExternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoExternaProdutoProp) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await esterilizacaoExternaService.schemaProduto();
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
      const rsp = await esterilizacaoExternaService.produto(
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

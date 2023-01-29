import React, { ReactNode } from "react";
import { TEvent, TFieldClient } from "../../../../types";
import { isEmpty } from "../../../../utils/identify/is_empty";
import { Table } from "../../../components/table/table";
import { operacaoService } from "../../../service/operacao.service";

type OperacaoProdutoProps = {
  operacao: { operacao?: string };
  dia: { dia?: string };
  produtoCorrente: { produto?: string };
  children?: ReactNode;
  onSelectEvent?: (event: TEvent) => void;
};

export function OperacaoProduto({
  operacao,
  dia,
  children,
  produtoCorrente,
  onSelectEvent,
}: OperacaoProdutoProps) {
  const [schema, setSchema] = React.useState<TFieldClient[]>([]);
  const [data, setData] = React.useState<TFieldClient[]>([]);

  React.useEffect(() => {
    async function getSchema() {
      const rsp = await operacaoService.schemaProduto();
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
      const rsp = await operacaoService.produto(
        operacao.operacao || "",
        dia.dia || ""
      );
      setData(rsp);
    }
    getData();
  }, [dia, operacao]);

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

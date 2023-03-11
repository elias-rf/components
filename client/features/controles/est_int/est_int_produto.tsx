import React from "react";
import { esterilizacaoInternaStore } from "../../../../model/esterilizacao-interna/esterilizacao-interna.store";
import { TEvent } from "../../../../types";
import { Table } from "../../../components/table";

type EsterilizacaoInternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent?: (event: TEvent) => void;
};

const { getSchemaProduto, getProduto } = esterilizacaoInternaStore.getState();

export function EsterilizacaoInternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoInternaProdutoProp) {
  const dataSchemaProduto = esterilizacaoInternaStore(
    (state) => state.dataSchemaProduto
  );
  const dataProduto = esterilizacaoInternaStore((state) => state.dataProduto);

  React.useEffect(() => {
    getSchemaProduto();
  }, []);

  React.useEffect(() => {
    getProduto({
      data: diaCorrente.dia || "",
    });
  }, [diaCorrente]);

  return (
    <Table
      name="produto"
      data={dataProduto}
      schema={dataSchemaProduto}
      selected={produtoCorrente}
      onSelectEvent={onSelectEvent}
    >
      {children}
    </Table>
  );
}

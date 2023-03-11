import React from "react";
import { esterilizacaoExternaStore } from "../../../../model/esterilizacao-externa/esterilizacao-externa.store";
import { TEvent } from "../../../../types";
import { Table } from "../../../components/table/table";

type EsterilizacaoExternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent?: (event: TEvent) => void;
};

const { getSchemaProduto, getProduto } = esterilizacaoExternaStore.getState();

export function EsterilizacaoExternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoExternaProdutoProp) {
  const dataSchemaProduto = esterilizacaoExternaStore(
    (state) => state.dataSchemaProduto
  );
  const dataProduto = esterilizacaoExternaStore((state) => state.dataProduto);

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

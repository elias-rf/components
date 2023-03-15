import React from "react";
import { esterilizacaoExternaStore } from "../../../../model/esterilizacao-externa/esterilizacao-externa.store";
import { Table } from "../../../components/table/table";

type EsterilizacaoExternaProdutoProp = {
  children?: any;
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelect?: (event: any) => void;
};

const { getSchemaProduto, getProduto } = esterilizacaoExternaStore.getState();

export function EsterilizacaoExternaProduto({
  diaCorrente,
  children,
  produtoCorrente,
  onSelect,
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
      onSelect={onSelect}
    >
      {children}
    </Table>
  );
}

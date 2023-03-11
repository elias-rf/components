import React from "react";
import { esterilizacaoInternaStore } from "../../../../model/esterilizacao-interna/esterilizacao-interna.store";
import { TEvent } from "../../../../types";
import { Table } from "../../../components/table/table";

type EsterilizacaoInternaModeloProp = {
  diaCorrente: { dia?: string };
  produtoCorrente: { produto?: string };
  onSelectEvent: (event: TEvent) => void;
};
const { getSchemaModelo, getModelo } = esterilizacaoInternaStore.getState();

export function EsterilizacaoInternaModelo({
  diaCorrente,
  produtoCorrente,
  onSelectEvent,
}: EsterilizacaoInternaModeloProp) {
  const dataSchemaModelo = esterilizacaoInternaStore(
    (state) => state.dataSchemaModelo
  );
  const dataModelo = esterilizacaoInternaStore((state) => state.dataModelo);

  React.useEffect(() => {
    getSchemaModelo();
  }, []);

  React.useEffect(() => {
    getModelo({
      data: diaCorrente.dia || "",
      produto: produtoCorrente.produto || "",
    });
  }, [diaCorrente, produtoCorrente]);

  return (
    <Table
      name="modelo"
      data={dataModelo}
      schema={dataSchemaModelo}
      onSelectEvent={onSelectEvent}
    ></Table>
  );
}

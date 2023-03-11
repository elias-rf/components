import React from "react";
import { clienteStore } from "../../../model/cliente/cliente.store";
import type { TIds } from "../../../types";
import { day } from "../../../utils/date/day";
import { Table } from "../../components/table";

type ClienteQuantidadeProps = {
  id: TIds;
  dia?: string;
};

const { getVendaMensalQuantidadeSchema, getVendaMensalQuantidade } =
  clienteStore.getState();

export function ClienteQuantidade({ id, dia }: ClienteQuantidadeProps) {
  const dataVendaMensalQuantidadeSchema = clienteStore(
    (state) => state.dataVendaMensalQuantidadeSchema
  );
  const dataVendaMensalQuantidade = clienteStore(
    (state) => state.dataVendaMensalQuantidade
  );

  const inicio = day(dia)
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day(dia).subtract(1, "month").endOf("month").format("YYYY-MM-DD");

  React.useEffect(() => {
    getVendaMensalQuantidadeSchema({ inicio, fim });
  }, [inicio, fim]);

  React.useEffect(() => {
    getVendaMensalQuantidade({ inicio, fim, cliente: id.cliente_id });
  }, [inicio, fim, id]);

  return (
    <Table
      name="ClienteQuantidade"
      data={dataVendaMensalQuantidade}
      schema={dataVendaMensalQuantidadeSchema}
    />
  );
}

import React from "react";
import { clienteStore } from "../../../model/cliente/cliente.store";
import type { TIds } from "../../../types";
import { day } from "../../../utils/date/day";
import { Table } from "../../components/table";

type ClienteValorProps = {
  id: TIds;
  dia?: string;
};

const { getVendaMensalValorSchema, getVendaMensalValor } =
  clienteStore.getState();

export function ClienteValor({ id, dia }: ClienteValorProps) {
  const dataVendaMensalValorSchema = clienteStore(
    (state) => state.dataVendaMensalValorSchema
  );
  const dataVendaMensalValor = clienteStore(
    (state) => state.dataVendaMensalValor
  );
  const inicio = day(dia)
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day(dia).subtract(1, "month").endOf("month").format("YYYY-MM-DD");

  React.useEffect(() => {
    getVendaMensalValorSchema({ inicio, fim });
  }, [inicio, fim]);

  React.useEffect(() => {
    getVendaMensalValor({
      cliente: id.cliente_id,
      inicio,
      fim,
    });
  }, [id, inicio, fim]);

  return (
    <Table
      name="ClienteValor"
      data={dataVendaMensalValor}
      schema={dataVendaMensalValorSchema}
    />
  );
}

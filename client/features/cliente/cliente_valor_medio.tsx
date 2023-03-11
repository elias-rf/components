import React from "react";
import { clienteStore } from "../../../model/cliente/cliente.store";
import type { TIds } from "../../../types";
import { day } from "../../../utils/date/day";
import { Table } from "../../components/table";

type ClienteValorMedioProps = {
  id: TIds;
  dia?: string;
};

const { getVendaMensalValorMedioSchema, getVendaMensalValorMedio } =
  clienteStore.getState();

export function ClienteValorMedio({ id, dia }: ClienteValorMedioProps) {
  const dataVendaMensalValorMedioSchema = clienteStore(
    (state) => state.dataVendaMensalValorMedioSchema
  );
  const dataVendaMensalValorMedio = clienteStore(
    (state) => state.dataVendaMensalValorMedio
  );

  const inicio = day(dia)
    .subtract(1, "year")
    .startOf("month")
    .format("YYYY-MM-DD");
  const fim = day(dia).subtract(1, "month").endOf("month").format("YYYY-MM-DD");

  React.useEffect(() => {
    getVendaMensalValorMedioSchema({ inicio, fim });
  }, [inicio, fim]);

  React.useEffect(() => {
    getVendaMensalValorMedio({
      cliente: id.cliente_id,
      inicio,
      fim,
    });
  }, [id, inicio, fim]);

  return (
    <Table
      name="ClienteValorMedio"
      data={dataVendaMensalValorMedio}
      schema={dataVendaMensalValorMedioSchema}
    />
  );
}

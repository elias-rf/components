import React, { useEffect } from "react";

import Datatable from "@/features/ui/table/table";
import ClienteForm from "@/features/cliente/cliente-form";
import DataContext, { ClientContext } from "@/contexts/data-context";
import day from "@/lib/day";
import ClienteService, { ClienteRecord } from "service/cliente.service";
import VendaMensalService from "service/venda-mensal.service";
import isEmpty from "@/utils/is/is-empty";
import type { Schema } from "../../../index.d";
import listVenda from "./listVenda";

const vendasSchema: Schema = {
  fields: [{ field: "NmCategoria", label: "Produto" }],
  pk: ["NmCategoria"],
};

export default function ClienteList() {
  const { clientKnex, client } = React.useContext(DataContext) as ClientContext;
  const clienteSvc = ClienteService(clientKnex);
  const vendaMensalSvc = VendaMensalService(clientKnex);

  const [clienteCurrent, setClienteCurrent] = React.useState([] as string[]);
  const [cliente, setCliente] = React.useState({} as ClienteRecord);
  const [vendasQuantidade, setVendasQuantidade] = React.useState([] as any[]);
  const [vendasValor, setVendasValor] = React.useState([] as any[]);
  const [vendasMedia, setVendasMedia] = React.useState([] as any[]);
  const [inicio, setInicio] = React.useState("");
  const [fim, setFim] = React.useState("");

  // Cria vendasSchema
  useEffect(() => {
    // define periodo
    setInicio(
      day().subtract(12, "month").startOf("month").format("YYYY-MM-DD")
    );
    setFim(day().format("YYYY-MM-DD"));
    // cria o schema para vendas
    for (let ct = 0; ct <= 12; ct++) {
      const month = day().subtract(ct, "month");
      vendasSchema.fields[ct + 1] = {
        field: month.format("YYYY-MM"),
        label: month.format("YY-MM"),
        labelClass: "text-right",
        fieldClass: "text-right",
      };
    }
  }, []);

  useEffect(() => {
    async function get() {
      const cli = await clienteSvc.read(clienteCurrent);
      setCliente(cli);
      const vendaData = await vendaMensalSvc.list(inicio, fim, clienteCurrent);
      const { quantidade, valor, valormedio } = listVenda(vendaData);
      setVendasQuantidade(quantidade);
      setVendasMedia(valormedio);
      setVendasValor(valor);
    }
    if (!isEmpty(clienteCurrent)) {
      get();
    }
  }, [clienteCurrent]);

  async function handleCliente({
    field,
    value,
  }: {
    field: string;
    value: string;
  }) {
    if (field === "CdCliente" && value) {
      setClienteCurrent([value]);
    }
  }

  return (
    <>
      <div className="p-2 mt-4 border-gray-400 border-1">
        <ClienteForm
          record={cliente}
          onChange={handleCliente}
        />
      </div>
      <div className="h-auto px-2 overflow-auto border-gray-400 border-1">
        <p className="mt-2 font-black">Quantidade</p>
        <Datatable
          data={vendasQuantidade}
          schema={vendasSchema}
        />
        <p className="mt-2 font-black">Valor Venda</p>
        <Datatable
          data={vendasValor}
          schema={vendasSchema}
        />
        <p className="mt-2 font-black">Valor Médio</p>
        <Datatable
          data={vendasMedia}
          schema={vendasSchema}
        />
      </div>
    </>
  );
}

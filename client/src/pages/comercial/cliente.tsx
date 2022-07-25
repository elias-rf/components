import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Action, Id } from "../../../../types";
import { Page, PageTitle } from "../../components";
import { Auth } from "../../features/auth";
import { ClienteForm } from "../../features/cliente/cliente-form";
import { useQueryState } from "../../lib/hooks/use-query-state";
import { ClienteRecord, clienteService } from "../../service/cliente.service";

export default function Cliente() {
  const cliente = clienteService;
  // const venda = VendaService();
  const schema = cliente.schema();

  const [form, setForm] = React.useState<ClienteRecord>(cliente.clear());
  const [selected, setSelected] = useQueryState("selected", []);
  const [orderBy, setOrderBy] = useQueryState("orderBy", []);
  const [where, setWhere] = useQueryState("where", []);

  // download form data
  const record = useQuery(
    ["cliente", selected],
    ({ queryKey }) => {
      const [_key, pk] = queryKey as [string, Id];
      return cliente.read(pk);
    },
    {
      staleTime: 1000 * 60 * 10, // 10 minutos
    }
  );

  function handleDispatch(action: Action) {
    switch (action.type) {
      case "select":
        if (action.payload.field === "CdCliente") {
          setSelected([action.payload.value]);
        }
        break;
      default:
        break;
    }
  }

  return (
    <Auth>
      <Page>
        <PageTitle
          title="Cliente"
          loading={record.isLoading}
        />
        <hr />
        <div className="p-2 mt-4 border-gray-400 border-1">
          <ClienteForm
            record={record.data || cliente.clear()}
            dispatch={handleDispatch}
          />
        </div>
      </Page>
    </Auth>
  );
}

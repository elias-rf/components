import React from "react";
import Page from "@/features/ui/page";
import knexRequest from "@/lib/knex/knex-request";
import Phonebook from "@/features/phonebook/phonebook";
import PhonebookService, {
  PhonebookRecord,
} from "../../service/phonebook.service";
import { useQuery, useMutation, useQueryClient } from "react-query";
import type { Action, OrderBy, Pks, Where } from "../../../index.d";
import { tableActionTypes } from "@/features/ui/table/table";
import { formActionTypes } from "@/features/ui/form/form";
import { ButtonAction, buttonActionTypes } from "@/features/ui/form/button";
import PageTitle from "@/features/ui/page-title";
import useQueryState from "@/lib/hooks/use-query-state";

/**
 * Agenda de Ramais
 */
function Agenda() {
  const phonebook = PhonebookService(knexRequest);
  const schema = phonebook.schema();
  const [status, setStatus] = React.useState("new"); // view, new, edit, create
  const [form, setForm] = React.useState<PhonebookRecord>(phonebook.clear());
  const [selected, setSelected] = useQueryState("selected", []);
  const [orderBy, setOrderBy] = useQueryState("orderBy", []);
  const [where, setWhere] = useQueryState("where", []);

  const queryClient = useQueryClient();

  const list = useQuery(
    ["phonebook", where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], OrderBy[]];
      return phonebook.list(where, orderBy);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  const record = useQuery(
    ["phonebook", selected],
    ({ queryKey }) => {
      const [_key, pk] = queryKey as [string, Pks];
      return phonebook.read(pk);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  const recordUpdate = useMutation(
    (args: [Pks, PhonebookRecord]) => phonebook.update(...args),
    { onSuccess: () => queryClient.invalidateQueries(["phonebook"]) }
  );
  const recordCreate = useMutation(
    (args: [PhonebookRecord]) => phonebook.create(...args),
    { onSuccess: () => queryClient.invalidateQueries(["phonebook"]) }
  );
  const recordDel = useMutation((args: [Pks]) => phonebook.del(...args), {
    onSuccess: () => queryClient.invalidateQueries(["phonebook"]),
  });

  React.useEffect(() => {
    if (!["edit", "create"].includes(status)) {
      setForm(record.data || phonebook.clear());
    }
  }, [status, record.data]);

  async function handleButton(action: ButtonAction) {
    switch (action.payload.name) {
      case "excluir":
        recordDel.mutate([selected]);
        setStatus("new");
        list.refetch();
        setSelected([]);
        break;
      case "salvar":
        if (status === "edit") {
          recordUpdate.mutate([[form.id], form]);
        }
        if (status === "create") {
          recordCreate.mutate([form]);
        }
        setStatus("view");
        list.refetch();
        record.refetch();
        break;
      case "novo":
        setStatus("new");
        setSelected([]);
        break;

      default:
        break;
    }
  }

  function handleDispatch(action: Action) {
    switch (action.type) {
      case tableActionTypes.select:
        setStatus("view");
        setSelected(action.payload);
        break;
      case tableActionTypes.order:
        setOrderBy(action.payload as OrderBy[]);
        list.refetch();
        break;
      case tableActionTypes.where:
        setWhere(action.payload as Where[]);
        list.refetch();
        break;
      case formActionTypes.change:
        if (status === "view") {
          setStatus("edit");
        } else {
          setStatus("create");
        }
        setForm({
          ...form,
          [action.payload.field]: action.payload.value,
        });
        break;
      case buttonActionTypes.click:
        handleButton(action as ButtonAction);
        break;
      default:
        break;
    }
  }

  return (
    <Page>
      <PageTitle
        title="Agenda de Ramais"
        loading={list.isLoading || record.isLoading}
      />
      <hr />
      <Phonebook
        schema={schema}
        list={list.data || []}
        record={form}
        dispatch={handleDispatch}
        selected={selected}
        orderBy={orderBy}
        where={where}
        status={status}
      />
    </Page>
  );
}

export default Agenda;

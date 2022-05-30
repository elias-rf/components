import React from "react";
import Page from "@/features/ui/page";
import knexRequest from "@/lib/knex/knex-request";
import AuthUser from "@/features/auth-user/auth-user";
import AuthUserService, { UsuarioRecord } from "../../service/usuario.service";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { Action, OrderBy, Pks, Where } from "../,../../../../index.d";
import { tableActionTypes } from "@/features/ui/table/table";
import { formActionTypes } from "@/features/ui/form/form";
import { ButtonAction, buttonActionTypes } from "@/features/ui/form/button";
import PageTitle from "@/features/ui/page-title";
import Authorization from "@/features/ui/authorization";

export default function Usuarios() {
  const authUser = AuthUserService(knexRequest);
  const schema = authUser.schema();
  const [selected, setSelected] = React.useState<Pks>([]);
  const [orderBy, setOrderBy] = React.useState<OrderBy[]>([]);
  const [where, setWhere] = React.useState<Where[]>([]);
  const [status, setStatus] = React.useState("new"); // view, new, edit, create
  const [form, setForm] = React.useState<UsuarioRecord>(authUser.clear());

  const queryClient = useQueryClient();
  const list = useQuery(
    ["auth-user", where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], OrderBy[]];
      return authUser.list(where, orderBy);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  const record = useQuery(
    ["auth-user", selected],
    ({ queryKey }) => {
      const [_key, pk] = queryKey as [string, Pks];
      return authUser.read(pk);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  const recordUpdate = useMutation(
    (args: [Pks, UsuarioRecord]) => authUser.update(...args),
    { onSuccess: () => queryClient.invalidateQueries(["auth-user"]) }
  );
  const recordCreate = useMutation(
    (args: [UsuarioRecord]) => authUser.create(...args),
    { onSuccess: () => queryClient.invalidateQueries(["phonebook"]) }
  );
  const recordDel = useMutation((args: [Pks]) => authUser.del(...args), {
    onSuccess: () => queryClient.invalidateQueries(["phonebook"]),
  });

  React.useEffect(() => {
    if (!["edit", "create"].includes(status)) {
      setForm(record.data || authUser.clear());
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
          recordUpdate.mutate([[form.kUsuario], form]);
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
        setSelected(action.payload as Pks);
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
    <Authorization>
      <Page>
        <PageTitle
          title="Cadastro de Usuários"
          loading={list.isLoading || record.isLoading}
        />
        <hr />
        <AuthUser
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
    </Authorization>
  );
}

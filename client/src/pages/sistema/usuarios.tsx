import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Action, Id, OrderBy, Where } from "../../../../types";
import {
  ButtonAction,
  buttonActionTypes,
  Page,
  PageTitle,
  tableActionTypes,
} from "../../components";
import { Auth } from "../../features/auth";
import { AuthUser } from "../../features/auth-user/auth-user";
import { UsuarioRecord, usuarioService } from "../../service/usuario.service";

export default function Usuarios() {
  const schema = usuarioService.schema();
  const [selected, setSelected] = React.useState<Id>([]);
  const [orderBy, setOrderBy] = React.useState<OrderBy[]>([]);
  const [where, setWhere] = React.useState<Where[]>([]);
  const [status, setStatus] = React.useState("new"); // view, new, edit, create
  const [form, setForm] = React.useState<UsuarioRecord>(authUser.clear());

  const queryClient = useQueryClient();
  const list = useQuery(
    ["auth-user", where, orderBy],
    ({ queryKey }) => {
      const [_key, where, orderBy] = queryKey as [string, Where[], OrderBy[]];
      return usuarioService.list(where, orderBy);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  const record = useQuery(
    ["auth-user", selected],
    ({ queryKey }) => {
      const [_key, pk] = queryKey as [string, Id];
      return usuarioService.read(pk);
    },
    {
      staleTime: 1000 * 60, // 1 minuto
    }
  );

  const recordUpdate = useMutation(
    (args: [Id, UsuarioRecord]) => usuarioService.update(...args),
    { onSuccess: () => queryClient.invalidateQueries(["auth-user"]) }
  );
  const recordCreate = useMutation(
    (args: [UsuarioRecord]) => usuarioService.create(...args),
    { onSuccess: () => queryClient.invalidateQueries(["phonebook"]) }
  );
  const recordDel = useMutation((args: [Id]) => usuarioService.del(...args), {
    onSuccess: () => queryClient.invalidateQueries(["phonebook"]),
  });

  React.useEffect(() => {
    if (!["edit", "create"].includes(status)) {
      setForm(record.data || usuarioService.clear());
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
        setSelected(action.payload as Id);
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
    <Auth>
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
    </Auth>
  );
}
